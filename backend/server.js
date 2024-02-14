const express = require("express")
const morgan = require("morgan")
// dotenv need to include
const router = require("./router/router")
const app = express()

const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json())
app.use(morgan("dev"))

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("HfggQq!")
})
app.get("/api/test", (req, res) => {
  // You can send any data as a response here
  res.json({ message: "This is a test API endpoint" })
})

// app.use("/api/v1", router)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
