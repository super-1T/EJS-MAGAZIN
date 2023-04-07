const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
require('dotenv').config();
const passport = require('passport');
const app = express();


app.set('views', path.join(__dirname, 'html'));

app.use(express.static('public'));
app.use(express.static('node_modules'));



app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(express.json());


app.use('/', routes);

/* app.use(session({
    secret: process.env.secretPassport,
})); */
/* app.use(passport.initialize())
app.use(passport.session())
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
}); */


app.listen(process.env.serverport, () => {
    console.log('SERVER IS RUNNING');
});

