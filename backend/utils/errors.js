exports.ApiError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || "global error"
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.status,
  })
  console.log("THE GLOBAL ERROR message is -->", err.status)
}

exports.mapError = (status, msg, next) => {
  let error = Error()
  error.statusCode = status
  error.status = msg
  next(error)
}
