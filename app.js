require('dotenv').config()

// Enviroment Variable
var title = process.env.TITLE;

// Require Module
var path = require('path')
var express = require('express');
const cookieParser = require("cookie-parser");
const session = require('express-session');

var { engine } = require('express-handlebars')

const app = express();

// View Engine Configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Expose This directory
app.use(express.static(path.join(__dirname, './assets/')));
app.use(cookieParser());

// Create Cookie
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay, secure : false },
}));

// var session;

// Router Imports
var order = require('./routes/order.js')
var send_msg = require('./routes/send_msg.js');
var dashboard = require('./routes/dashboard.js');
var {postLogin} = require('./controller/login.js');

// Api Router
var apiOrder = require("./api/order.js");
var apiSendMsg = require("./api/snd_msg.js");


app.use("/api/order", apiOrder );
app.use("/api/sendMsg", apiSendMsg);


// Routes Use
app.use('/order', order);
app.use('/send_msg', send_msg);
app.use('/dashboard', dashboard);

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


app.use('/login', express.json());
app.use('/login', express.urlencoded({ extended: true }));
// cookie parser middleware

app.get('/login', (req, res) => {

    if(req.session.officeID) {
        res.redirect('/dashboard');
    } else {
        const send_data = {
            title : "Login - On Road Assist",
            // home : false,
            login : false
        };

        res.render('login', {data : send_data} );
    }
})

// var session ;
app.post('/login', postLogin);

app.get('/sucessful', (req, res) => {
    res.render('sucessful', {});
});


app.listen( 3000 , function () {
    console.log('Express server listening 3000');
});
