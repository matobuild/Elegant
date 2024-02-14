exports.mapError = (status, msg, next) => {
  let error = Error()
  error.statusCode = status
  error.status = msg
  next(error)
}
