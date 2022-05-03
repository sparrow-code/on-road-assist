const express = require('express');
const router = express.Router();

const pool = require('../db_conn.js');

// const bodyParser = require('body-parser');

router.get('/', function (req, res) {
    const sql = "SELECT * " +
        " FROM `order_Data` " +
        "ORDER BY `id` DESC LIMIT 10 ";

    pool.query(sql, function (err, result) {
        if (err) throw err;

        res.json(result);
    });
})

router.get('/:id', function (req, res) {
    // Display Perticular Order
    const sql = "SELECT * FROM `reach_us` " +
    " WHERE `id` = ?";

    pool.query(sql, req.params.id, function (err, result) {
        if (err) throw err;

        res.json(result);
    });
})

router.post('/post', (req, res) => {
    var req_data = [
        req.body.usr_name,
        req.body.usr_email,
        req.body.usr_msg,
    ];

    var sql = "INSERT INTO `reach_us`(`user_name`, `e_mail`, `user_msg`) " +
        " VALUES (?)";
    pool.query(sql, [req_data], function (err, result) {
        if (err) {
            throw err;
        } else {
            res.json(req_data);
        }
    });

    res.json({});

})

module.exports = router;