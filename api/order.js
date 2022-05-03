const express = require('express');
const router = express.Router();

const pool = require('../db_conn.js');

// const bodyParser = require('body-parser');

router.get('/', function (req, res) {
    // Display Top 10 Order

    const sql = "SELECT * " +
        " FROM `order_Data` " +
        "ORDER BY `ID` DESC LIMIT 10 ";

    pool.query(sql, function (err, result) {
        if (err) throw err;

        res.json(result);
    });

})

router.get('/:id', function (req, res) {
    // Display Perticular Order
    const sql = "SELECT * " +
        " FROM `order_Data` " +
        " WHERE `ID` = ? " ;

    pool.query(sql, req.params.id, function (err, result) {
        if (err) throw err;

        res.json(result);
    });
})

router.post('/post', (req, res) => {
    // Post An Order

    var req_data = [
        makeid(7),
        req.body.veh_reg_no,
        req.body.full_name,
        req.body.e_mail_id,
        req.body.mo_no,
        req.body.area,
        req.body.lat,
        req.body.lng,
        req.body.family_no_1,
        req.body.frnd_no_2,
        req.body.frnd_no_3
    ]

    var sql = "INSERT INTO " +
        " `order_Data`(`main_id`, `vehical_registration_number`, `full_name`, `e_mail`, `mob_num`, `near_area`, `latitude`, `longitude`, `family_number`, `first_frnd_num`, `sec_frnd_num`) " +
        "      VALUES (?)";

    pool.query(sql, [req_data], function (err, result) {
        if (err) {
            throw err;
        } else {
            res.json(req_data);
        }
    });

    /*
         const req_data = {
            "get" : "Get Data"
        }
        res.json( req_data);
    */
})

module.exports = router;