const express = require('express');
const router = express.Router();
const User = require("../models/user")

router.get('/user', (req, res, next) => {
  if(!req.session.currentUser) {
    res.redirect("/")
    return;
  }
  console.log("hello! In session", req.session.currentUser)
  res.render('user/index', {user:req.session.currentUser});
});

router.get('/user/detail', (req, res, next) => {
  if(!req.session.currentUser) {
    res.redirect("/")
    return;
  }
  console.log("hello! In session", req.session.currentUser)
  res.render('user/detail', {user:req.session.currentUser});
});

router.get('/username-taken/:username', (req, res, next) => {
  User.find({username: req.params.username})
    .then((user)=> {
      if (user.length > 0) res.json({taken: true})
      else res.json({taken: false})
    })
});

module.exports = router;