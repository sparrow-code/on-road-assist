var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');


const { postOrder } = require("../controller/order.js");

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
router.post('/', postOrder);

module.exports = router;