const express = require('express');
const app = express();
const router = express.Router();
const path    = require('path');
const mongoose = require('mongoose');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err)=> {
    if(!err) {
      console.log("connected");
      
    } else {
      console.log("ERROR ERROR ERROR", err);
    }
})

app.use(cookieParser());

app.use(session({
  secret: process.env.CO0KIE_SECRET,
  cookie: { maxAge: 600000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

// routing
protectedPages(app.use('/', require('./routes/community')));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/user'));

// to check if user is logged in before rendering protected pages
function protectedPages() {
  router.use((req,res,next) => {
    if (req.session.currentUser) {
      next();
    } else {
      res.render('auth/login');
    }
  });
}

app.listen(process.env.PORT, ()=> {
    console.log("Listening!!!!!");
});

module.exports = app;