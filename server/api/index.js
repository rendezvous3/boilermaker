const router = require('express').Router()
module.exports = router

router.use((res, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})
