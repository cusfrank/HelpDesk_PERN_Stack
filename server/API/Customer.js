const pool = require("../db");
const router = require('express').Router();
const jwt = require("jsonwebtoken")


router.get("/new_ticket_code", async (req, res) => {
  try {
    let new_Ticket_Code = await pool.query(`SELECT array_to_string(ARRAY(SELECT chr((65 + round(random() * 25)) :: integer) 
FROM generate_series(1,8)), '')`)
    new_Ticket_Code = new_Ticket_Code.rows[0].array_to_string
    const new_Customer = await pool.query(`INSERT INTO customer (Ticket_code) VALUES($1) RETURNING *`, [new_Ticket_Code])
    res.json({ new_Ticket_Code: new_Ticket_Code });
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/login", async (req, res) => {
  //Find ticket code in database
  const { ticket_code } = req.body;
  let customer = await pool.query(
    `
      SELECT * FROM customer WHERE ticket_code = $1
    `
    , [ticket_code]);
  if (customer.rows.length == 0) {
    res.status(400).json({ message: "failed" });
  }
  customer = customer.rows[0];
  try {
    const token = jwt.sign({
      id_customer: customer.id,
      ticket_code: customer.ticket_code,
      isAdmin: false,
    }, process.env.TOKEN_SECRET, { expiresIn: "1h" });

    res.status(201)
      .cookie("auth-token", token, {
        expires: new Date(Date.now() + 60 * 60 * 1000),
        maxAge: 60 * 60 * 1000,
        httpOnly: false,
        sameSite: "Lax",
        path: "/"
      });

    res.json({ message: "success" })
  } catch (err) {
    res.status(400).json({ message: err });
  }
})

module.exports = router;