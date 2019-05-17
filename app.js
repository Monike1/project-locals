const express = require('express');
const app = express();
const path    = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/locals', { useNewUrlParser: true });
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/locals', {useNewUrlParser: true}, (err)=> {
    if(!err) {
      console.log("connected");
      
    } else {
      console.log("ERROR ERROR ERROR", err);
    }
})

app.use(cookieParser())

app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
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
app.use('/', require('./routes/community'));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/user'));

app.listen(3000, ()=> {
    console.log("Listening!!!!!");
});