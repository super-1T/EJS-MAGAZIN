const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    /*     console.log('Request for home recieved');
        const indexData = await getData();
        console.log(indexData); */
    /*     if (req.isAuthenticated()) {
            res.render('index', {
                user: req.user
            });
        } else {
            res.render('index', {
                user: undefined
            });
        } */
    res.render('index', {
        user: undefined
    });

});

router.post('/api/regisUser', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (name && email && password) {
        res.send('Все гууд')
    } else {
        res.send('Не все гууд')
    }
})

router.get('/login', (req, res) => {
    res.render('pages/login')
})

router.post('/loginData', (req, res) => {
    console.log(req.body)
})

/* router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('../pages/contact');
});
 */
/* router.get('/404', (req, res, next) => {
    res.render('errors/404');
    next();
}) */

module.exports = router;