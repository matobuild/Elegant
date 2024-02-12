const express = require("express")
const morgan = require("morgan")
const app = express()

const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json())
app.use(morgan("dev"))

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello AAQq!")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
