const pool = require("../db");
const router = require('express').Router();

router.post("/register", async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const newAdmin = await pool.query(
      "INSERT INTO admin (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [Name, Email, Password]
    );
    res.json({ message: "success" })
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;