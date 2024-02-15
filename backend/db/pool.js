const { Pool } = require("pg")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// CHECK if connected to database
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error executing query:", err)
    return
  }
  console.log(
    "DATABASE is connected, Current date and time from PostgreSQL:",
    res.rows[0].now
  )
})

module.exports = pool
