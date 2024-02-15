const pool = require("../db/pool")

async function createTable(sql) {
  try {
    let response = await pool.query(sql)
    // console.log("THE RESPONSE IS --->", response)
    // console.log("table created successfully")
  } catch (err) {
    console.log("error creating table---->", err)
  }
}

const userTableSql = `
  CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    roles VARCHAR(255)
  );`

function initializeTable() {
  createTable(userTableSql)
}

module.exports = { initializeTable }
