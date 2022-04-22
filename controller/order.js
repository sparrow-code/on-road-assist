const { transporter } = require('../mail.js');

const { pool } = require('../db_conn.js');

const postOrder = (req, res, next) => {
    var req_data = {
        veh_reg_no: req.body.veh_reg_no,
        full_name: req.body.full_name,
        e_mail_id: req.body.e_mail_id,
        mo_no: req.body.mo_no,
        area: req.body.area,
        lat: req.body.lat,
        lng: req.body.lng,
        family_no_1: req.body.family_no_1,
        frnd_no_2: req.body.frnd_no_2,
        frnd_no_3: req.body.frnd_no_3
    }

    var sql = "INSERT INTO `order_Data`(`ID`, `vehical_registration_number`, `full_name`, `e_mail`, `mob_num`, `near_area`, `main_id`, `latitude`, `longitude`, `family_number`, `first_frnd_num`, `sec_frnd_num`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12])";
    pool.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    /* 
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
     */


    res.redirect('/sucessful');
}


module.exports = {
    postOrder
}