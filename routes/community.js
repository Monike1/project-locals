const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require('../models/post');

// to show the list of posts 
router.get('/community/', (req, res) => {
  Post.find({}, (err, result) => {
    if (err) { 
      return err;
    } else {
      console.log('result', result)
      res.render('community/index', {
          posts: result
        });
    }
  });
});

module.exports = router;