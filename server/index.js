//server express
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/admin/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newAdmin = await pool.query(
      "INSERT INTO Users_Admin (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.json(newAdmin.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});