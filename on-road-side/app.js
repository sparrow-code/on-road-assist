require('dotenv').config()

// Enviroment Variable
var title = process.env.TITLE;

// Require Module
var path = require('path')
var express = require('express');


var { engine } = require('express-handlebars')

const app = express();

// View Engine Configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Expose This directory
app.use(express.static(path.join(__dirname, './assets/')));


// Router Imports
var order = require('./routes/order.js')
var send_msg = require('./routes/send_msg.js');

// Routes Use
app.use('/order', order);
app.use('/send_msg', send_msg);

app.get('/', (req, res) => {
    var send_data = {
        title: "OnRoad Assist",
        home : true
    }
    res.render('home', {data : send_data});
})

app.get('/car', (req, res) => {
    var send_data = {
        title : "Fourwheeler Services",
        home : false
    }
    res.render('car', {data : send_data});
})

app.get('/bike', (req, res) => {
    var send_data = {
        title : "Two-wheeler Services",
        home : false
    }
    res.render('bike', {data : send_data});
})


app.get('/emergency', (req, res) => {
    var send_data = {
        title : "Emergency Services",
        home : false
    }
    res.render('emergency', {data : send_data});
})

app.get('/general', (req, res) => {
    var send_data = {
        title : "General/Fuel Services",
        home : false
    }
    res.render('general', {data : send_data});
})

app.get('/register', (req, res) => {
    res.render('register', {});
})

app.get('/login', (req, res) => {
    res.render('login', {});
})

app.get('/sucessful', (req, res) => {
    res.render('sucessful', {});
});


app.listen( 3000 , function () {
    console.log('Express server listening 3000');
});
