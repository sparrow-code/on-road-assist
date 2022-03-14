var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const { transporter } = require('../mail.js');

// parse application/x-www-form-urlencoded
router.use('/', bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
    res.render('order', {})
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
        veh_reg_no: req.body.veh_reg_no,
        full_name: req.body.full_name,
        e_mail_id: req.body.e_mail_id,
        mo_no: req.body.mo_no,
        area: req.body.area,
        current_location: req.body.current_location,
        frnd_no_1: req.body.frnd_no_1,
        frnd_no_2: req.body.frnd_no_2,
        frnd_no_3: req.body.frnd_no_3
    }

    var mailOptions = {
        from: 'admin@zeroxbit.com',
        to: req_data.e_mail_id,
        subject: 'Your Order Place Successfully',
        text: 'Rate your experience with us',
    };

    // var mail_data = {};

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
    });

    res.redirect('/sucessful');
})

module.exports = router;