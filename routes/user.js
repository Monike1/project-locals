const express = require('express');
const router = express.Router();
const User = require("../models/user")

router.get('/user', (req, res, next) => {
  res.render('user/index');
});

router.get('/username-taken/:username', (req, res, next) => {
  User.find({username: req.params.username})
    .then((user)=> {
      if (user.length > 0) res.json({taken: true})
      else res.json({taken: false})
    })
});

module.exports = router;