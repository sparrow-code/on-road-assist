var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const { transporter } = require('../mail.js');


// parse application/x-www-form-urlencoded
router.use('/', bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
    res.redirect('/');
})

router.get('/:slug', (req, res) => {
    var send_data = {
        slug: req.params.slug,

    }
    res.render('order', { data: send_data })
})


router.use('/', bodyParser.json())
router.post('/', (req, res) => {

    var req_data = {
        usr_name: req.body.usr_name,
        e_mail_id: req.body.usr_email,
        usr_msg: req.body.usr_msg
    }

    var mailOptions = {
        from: 'admin@zeroxbit.com',
        to: req_data.e_mail_id,
        subject: 'New Message From ' + req_data.usr_name,
        text: req_data.usr_msg,
    };

    // var mail_data = {};

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect('/');
})

module.exports = router;