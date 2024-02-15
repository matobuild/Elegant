const express = require("express")
const userService = require("../service/userService")

const router = express.Router()

router.route("/users").post(userService.signUp)

module.exports = router
