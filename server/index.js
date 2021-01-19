//server express
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//API
const adminAPI = require("./API/Admin")
app.use("/api/admin", adminAPI)
const customerAPI = require("./API/Customer")
app.use("/api/customer", customerAPI)
const chatLogAPI = require("./API/Chat_Log")
app.use("/api/chat_log", chatLogAPI)
//ROUTES//

app.listen(5000, () => {
  console.log("server has started on port 5000");
});