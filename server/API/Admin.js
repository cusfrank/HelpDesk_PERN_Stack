const pool = require("../db");
const router = require('express').Router();

router.post("/register", async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const newAdmin = await pool.query(
      "INSERT INTO admin (name, email, password) VALUES($1, $2, crypt($3, gen_salt('bf'))) RETURNING *",
      [Name, Email, Password]
    );
    res.json({ message: "success" })
  } catch (err) {
    console.error(err.message);
    res.json({ message: "failed" })
  }
});

router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const searchResult = await pool.query(
      "SELECT id FROM admin WHERE email = $1 AND password = crypt($2, password)",
      [Email, Password]
    );
    if (searchResult.rows.length == 0) {
      res.json({ message: "failed" })
    }
    const admin = searchResult.rows[0]

    const token = jwt.sign({
      id_admin: admin.id,
      isAdmin: true,
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
    console.error(err.message);
    res.json({ message: "failed" })
  }
});

module.exports = router;