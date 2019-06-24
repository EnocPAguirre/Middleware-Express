const express = require('express');

const app = express();

//Funcion middleware
var myLog = function (req, res, next) {
    console.log('Logged');
    next();
}

app.use(myLog);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);