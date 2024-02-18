const pool = require("../db/pool")
const errors = require("../utils/errors")
const encrypt = require("../utils/encrypt")

exports.signUp = async (req, res, next) => {
  try {
    let body = req.body
    // console.log("BODY------->", body)
    let sqlCheckDupUser = `SELECT * FROM public.users WHERE username = $1`

    let responseCheckDupUser = await pool.query(sqlCheckDupUser, [
      body.username,
    ])
    // console.log("responseCheckDupUser result --->", responseCheckDupUser)
    if (responseCheckDupUser.rowCount > 0) {
      return res.status(400).json({ status: "Fail", data: "User is duplicate" })
    }

    let sql = `INSERT INTO public.users
    ( name, email,username, user_password, roles)
    VALUES($1, $2, $3, $4, $5);`
    let pwd = await encrypt.hashPassword(body.password)
    let response = await pool.query(sql, [
      body.name,
      body.email,
      body.username,
      pwd,
      body.role,
    ])
    console.log("The response is --->", response)
    if (response.rowCount > 0) {
      const token = await encrypt.generateJWT({ username: body.username })
      console.log("Token is:---->", token)
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

exports.signIn = async (req, res, next) => {
  try {
    let body = req.body
    // console.log("BODY------->", body)
    let sql = `SELECT * FROM public.users WHERE username = $1`
    let response = await pool.query(sql, [body.username])
    console.log("RESPONSE--------->", response)
    if (response.rowCount > 0) {
      const isPwdValid = await encrypt.comparePassword(
        body.password,
        response.rows[0].user_password
      )
      // console.log("isPwdValid--------->", response)
      if (isPwdValid) {
        const token = await encrypt.generateJWT({
          username: body.username,
          role: response.rows[0].roles,
          userId: response.rows[0].id,
        })
        return res
          .status(200)
          .cookie("jwt", token, {
            expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
            httpOnly: true,
            secure: true,
          })
          .json({
            status: "success",
            token: token,
            data: "Login success",
          })
      } else {
        return res
          .status(401)
          .json({ status: "Fail", data: "Password invalid" })
      }
    } else {
      return res.status(400).json({ status: "Fail", data: "User not found" })
    }
  } catch (error) {
    console.log(error.message)
    errors.mapError(500, "Internal Server Error", next)
  }
}
