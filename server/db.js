//env
require('dotenv/config')
//

const { USER = "postgres" } = process.env
const { PASSWORD = "admin" } = process.env

const Pool = require("pg").Pool;

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: "localhost",
  port: 5432,
  database: "HelpDesk_PERN_Stack"
});

module.exports = pool;