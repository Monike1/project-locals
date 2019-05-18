const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require('../models/post');

// to show the list of posts 
router.get('/community/', (req, res) => {

  if(!req.session.currentUser){
    res.redirect("/");
    return;
  }

  Post.find({}, (err, result) => {
    if (err) { 
      return err;
    } else {
      console.log('result', result)
      res.render('community/index', {
          user: req.session.currentUser,
          posts: result
        });
    }
  });
});

// to show post detail page
router.get('/community/:postId', (req, res) => {
  Post.findById({_id: mongoose.Types.ObjectId(req.params.postId)}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('community/post', {posts: result});
    }
  });
});

module.exports = router;