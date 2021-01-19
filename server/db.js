//env
require('dotenv/config')
//

const { USER = "postgres" } = process.env
const { PASSWORD = "admin" } = process.env
const { HOST = "localhost" } = process.env
const { PORT = 5432 } = process.env

const Pool = require("pg").Pool;

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: "HelpDesk_PERN_Stack"
});

module.exports = pool;