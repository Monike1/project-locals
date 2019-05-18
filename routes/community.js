const express = require("express");
const router = express.Router();
const multer = require('multer');
const Post = require('../models/post');
const Picture = require('../models/picture');

// route to upload from project base path
var upload = multer({ dest: './public/uploads/' });

// to show the list of posts 
// router.get('/community/', (req, res) => {

//   if(!req.session.currentUser){
//     res.redirect("/");
//     return;
//   }

//   Post.find({}, (err, result) => {
//     if (err) { 
//       return err;
//     } else {
//       console.log('result', result)
//       res.render('community/index', {
//           user: req.session.currentUser,
//           posts: result
//         });
//     }
//   });
// });

// to show post detail page
// router.get('/community/:postId', (req, res) => {
//   Post.findById({_id: mongoose.Types.ObjectId(req.params.postId)}, (err, result) => {
//     if (err) { 
//       return err;
//     } else {
//       res.render('community/post', {posts: result});
//     }
//   });
// });

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
  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
    postText: req.body.posttext
  });

  pic.save((err) => {
    res.redirect('community');
  });
});

/* GET community home page. */
router.get('/community', (req, res, next) => {
  Picture.find((err, pictures) => {
    res.render('community/index', {pictures});
  });
});

module.exports = router;