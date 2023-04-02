const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
require('dotenv').config();
const { insertData } = require('./api/testData.js')
const app = express();

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'sprites')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

app.use('/', routes);




app.listen(process.env.serverport, () => {
    console.log('SERVER IS RUNNING');
});