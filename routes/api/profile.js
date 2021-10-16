const express = require('express')
const router = express.Router()

// @route   Get api/profile
// @desc    Test route
// @access  Public

router.get('/', (req, res) => {
  res.send('User profile')
})

module.exports = router
