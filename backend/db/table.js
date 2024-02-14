const pool = require("../db/pool")

async function createTable(sql) {
  try {
    let response = await pool.query(sql)
    console.log("THE RESPONSE IS --->", response)
    console.log("table created successfully")
  } catch (err) {
    console.log("error creating table---->", err)
  }
}

const userTableSql = `
  CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`

function initializeTable() {
  createTable(userTableSql)
}

module.exports = { initializeTable }
