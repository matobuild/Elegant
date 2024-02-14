const express = require("express")
const morgan = require("morgan")
// dotenv need to include
const router = require("./router/router")
const app = express()

const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json())
app.use(morgan("dev"))

// initialize table in database
const { initializeTable } = require("./db/table")
initializeTable()

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("mato!")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
