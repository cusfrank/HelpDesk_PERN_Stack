const pool = require("../db");
const router = require('express').Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newAdmin = await pool.query(
      "INSERT INTO admin (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.json(newAdmin.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;