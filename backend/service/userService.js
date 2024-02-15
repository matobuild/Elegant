const pool = require("../db/pool")
const errors = require("../utils/errors")
const encrypt = require("../utils/encrypt")

exports.signUp = async (req, res, next) => {
  try {
    let body = req.body
    console.log("BODY------->", body)
    let sqlCheckDupUser = `SELECT * FROM public.users where username = $1`

    let responseCheckDupUser = await pool.query(sqlCheckDupUser, [
      body.username,
    ])
    console.log("responseCheckDupUser result --->", responseCheckDupUser)
    if (responseCheckDupUser.rowCount > 0) {
      return res.status(400).json({ status: "Fail", data: "User is duplicate" })
    }

    let sql = `INSERT INTO public.users
    ( first_name, last_name, email,username, user_password, roles)
    VALUES($1, $2, $3, $4, $5, $6);`
    let pwd = await encrypt.hashPassword(body.password)
    let response = await pool.query(sql, [
      body.firstname,
      body.lastname,
      body.email,
      body.username,
      pwd,
      body.role,
    ])
    console.log("The response is --->", response)
    if (response.rowCount > 0) {
      const token = await encrypt.generateJWT({ username: body.username })
      return res
        .status(200)
        .json({ status: "Success", token: token, data: "SignUp success" })
    } else {
      return res.status(400).json({ status: "Fail", data: "SignUp fail" })
    }
  } catch (error) {
    console.log("THE ERROR message is -->", error.message)
    errors.mapError(500, "Internal Server Error", next)
  }
}
