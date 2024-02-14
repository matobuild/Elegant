const pool = require("../db/pool")
const errors = require("../utils/errors")

exports.createTable = async (req, res, next) => {
  try {
    return res.status(400).json({ status: "WORK", data: "working fine!!" })
  } catch (error) {
    console.log(error.message)
    errors.mapError(500, "Internal Server Error", next)
  }
}
