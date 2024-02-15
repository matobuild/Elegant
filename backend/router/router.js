const express = require("express")
const userService = require("../service/userService")

const router = express.Router()

router.route("/users/").post(userService.signUp)
router.route("/users/login").post(userService.signIn)

module.exports = router
