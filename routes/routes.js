const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Request for home recieved');
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('../pages/contact');
});

/* router.get('/404', (req, res, next) => {
    res.render('errors/404');
    next();
}) */

module.exports = router;