const pool = require("../db");
const router = require('express').Router();

router.post("/", async (req, res) => {
  try {
    const { id_customer, message } = req.body;
    const newMessage = await pool.query(
      "INSERT INTO chat_log (id_customer, message) VALUES($1,$2) RETURNING *",
      [id_customer, message]
    );
    res.json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



router.get("/", async (req, res) => {
  try {
    const allMessages = await pool.query("SELECT * FROM chat_log");
    res.json(allMessages.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:ticket_code", async (req, res) => {
  try {
    const { ticket_code } = req.params;
    const messages = await pool.query(
      `
      SELECT message FROM chat_log AS m
      INNER JOIN customer AS c
      ON (m.id_customer=c.id) 
      WHERE c.ticket_code= 'VLVPPVVD'
      `
      , [ticket_code]);
    res.json(messages.rows)
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:ticket_code", async (req, res) => {
  try {
    const { ticket_code } = req.params;
    const { message } = req.body;
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

router.delete("/:ticket_code", async (req, res) => {
  try {
    const { ticket_code } = req.params;
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