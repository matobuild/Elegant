const express = require("express")
const userService = require("../service/userService")

const router = express.Router()

router.route("/createTable").get(userService.signUp)

module.exports = router
