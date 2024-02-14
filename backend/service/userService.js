const pool = require("../db/pool")
const errors = require("../utils/errors")

exports.signUp = async (req, res, next) => {
  try {
    let body = req.body
    console.log("BODY------->", body)

    console.log("Creating table")
    return res.status(400).json({ status: "WORK", data: "working fine!!" })
  } catch (error) {
    console.log(error.message)
    errors.mapError(500, "Internal Server Error", next)
  }
}
