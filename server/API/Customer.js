const pool = require("../db");
const router = require('express').Router();

router.get("/new_ticket_code", async (req, res) => {
  try {
    var new_Ticket_Code = await pool.query(`SELECT array_to_string(ARRAY(SELECT chr((65 + round(random() * 25)) :: integer) 
FROM generate_series(1,8)), '')`)
    var new_Ticket_Code = new_Ticket_Code.rows[0].array_to_string
    const new_Customer = await pool.query(`INSERT INTO customer (Ticket_code) VALUES($1) RETURNING *`, [new_Ticket_Code])
    res.json({ new_Ticket_Code: new_Ticket_Code });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;