const pool = require("../db");
const router = require('express').Router();

const verifyToken = require("../Middleware/VerifyToken")


router.post("/", [verifyToken], async (req, res) => {
  const user = res.locals.user || {};

  if (user.isAdmin) {//It is the administrator who is sending messages
    try {
      const { ticket_code, message } = req.body;
      let id_customer = await pool.query(//find his id first
        `
          SELECT id 
          FROM customer 
          WHERE ticket_code = $1
        `,
        [ticket_code]
      )
      id_customer = id_customer.rows[0].id
      const newMessage = await pool.query(//insert id and message into chat_log
        "INSERT INTO chat_log (id_customer, message, id_admin) VALUES($1,$2,$3) RETURNING *",
        [id_customer, message, user.id_admin]
      );
      res.json(newMessage.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  }

  if (!user.isAdmin) {//It is the customer who is sending messages
    try {
      const { ticket_code } = user;
      const { message } = req.body;
      let id_customer = await pool.query(//find his id first
        `
          SELECT id 
          FROM customer 
          WHERE ticket_code = $1
        `,
        [ticket_code]
      )
      id_customer = id_customer.rows[0].id
      const newMessage = await pool.query(//insert id and message into chat_log
        "INSERT INTO chat_log (id_customer, message) VALUES($1,$2) RETURNING *",
        [id_customer, message]
      );
      res.json(newMessage.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  }

});



router.get("/", [verifyToken], async (req, res) => {
  const user = res.locals.user || {};

  if (user.isAdmin) {//It is the administrator whos is searching the chat_log
    try {
      const allMessages = await pool.query(
        `
          SELECT ticket_code, message 
          FROM chat_log as m 
          INNER JOIN customer as c 
          ON (m.id_customer = c.id)
        `
      );
      res.json(allMessages.rows);
    } catch (err) {
      console.error(err.message);
    }
  } else {//It is the customer who is searching the chat_log
    try {
      const { ticket_code } = user;
      const messages = await pool.query(
        `
      SELECT message FROM chat_log AS m
      INNER JOIN customer AS c
      ON (m.id_customer=c.id) 
      WHERE c.ticket_code= $1
      `
        , [ticket_code]);
      res.json(messages.rows)
    } catch (err) {
      console.error(err.message);
    }
  }
});

router.put("/", [verifyToken], async (req, res) => {
  const user = res.locals.user || {};//only available to admin
  if (!user.isAdmin) res.json({ message: "Not authorized" })

  try {
    const { ticket_code, message } = req.body;
    const updateMessage = await pool.query(
      `
      UPDATE chat_log AS m 
      SET message = $1 
      FROM customer AS c
      WHERE m.id_customer = c.id AND c.ticket_code = $2
      `,
      [message, ticket_code]);
    res.json(updateMessage.row[0]);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/", [verifyToken], async (req, res) => {
  const user = res.locals.user || {};//only available to admin
  if (!user.isAdmin) res.json({ message: "Not authorized" })

  try {
    const { ticket_code } = req.body;
    const deletedChatLog = await pool.query(
      `DELETE FROM chat_log AS m
      USING customer AS c
      WHERE m.id_customer=c.id AND c.ticket_code =$1
      `,
      [ticket_code]
    );
    res.json(deletedChatLog.row[0]);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;