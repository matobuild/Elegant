import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './router/router';
import {ApiError} from './utils/errors';

import cors from 'cors';
const app = express()

dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT ?? 3000

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())
app.use(morgan("dev"))


import checkDb from './db/checkDb'; 
checkDb()

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("test tomato!")
})

app.use("/api/v1", router)

// global error handling
app.use(ApiError)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
