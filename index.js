const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

app.use('/', routes);




app.listen(8089, () => {
    console.log('SERVER IS RUNNING');
});