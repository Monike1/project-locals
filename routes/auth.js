const express = require('express');
const router = express.Router();
const User = require('../models/user');

// to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// to show the signup form
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
  });

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const city = req.body.city;
  const street = req.body.street;
  const zipcode = req.body.zipcode;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);



  User.findOne({ "username": username })
  .then(user => {
    if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists"
      });
      return;
    }
    if (username === "" || email === "" || city === "" || street === "" || zipcode === "" || password === "") {
      res.render("auth/signup", {
        errorMessage: "Please, fill in all the fields"
      });
      return;
    }

    User.create({
      username,
      email,
      city,
      street,
      zipcode,
      password: hashPass
    })
    .then((user) => {
      req.session.currentUser = user; 
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    next(error);
  });
});

router.post('/login', (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;
  

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Please, fill in all the fields"
    });
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
    if (!user) {
      res.render("auth/login", {
        errorMessage: "The username doesn't exist"
      });
      return;
    }
    if (bcrypt.compareSync(thePassword, user.password)) {
      // save the logic in the session

    //  const { password, ...protectedUser } = user._doc;

      req.session.currentUser = user;
    
      res.redirect('/community');
    } else {
      res.render('auth/login', {
        errorMessage: "Incorrect password"
      });
    }
  })
  .catch(error => {
    next(error);
  })
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

router.get("/", (req, res, next) => {
  res.render("auth/login");
});

module.exports = router;