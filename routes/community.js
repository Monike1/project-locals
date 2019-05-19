const express = require("express");
const router = express.Router();
const multer = require('multer');
const Post = require('../models/post');
const User = require('../models/user');

// route to upload from project base path
var upload = multer({ dest: './public/uploads/' });


// to render: add new post form 
router.get('/community/new-post', (req, res, next) => {
  if(!req.session.currentUser) {
    res.redirect("/")
    return;
  }
  console.log("hello! In session", req.session.currentUser)
  res.render('community/new-post', {user:req.session.currentUser});
});

router.post('/upload', upload.single('photo'), (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
    postText: req.body.posttext,
    author: req.session.currentUser._id // works
  });

  post.save((err) => {
    res.redirect('community');
  });

  // let updatedUser = new User({
  //   posts: { $push: { posts: post._id} }
  // });
  // User.findByIdAndUpdate({_id: req.session.currentUser._id}, updatedUser);
  
});

/* GET community home page. */
router.get('/community', (req, res, next) => {
  if(!req.session.currentUser){
    res.redirect("/");
    return;
  }
  Post.find((err, posts) => {
    res.render('community/index', {posts});
  });
});

module.exports = router;