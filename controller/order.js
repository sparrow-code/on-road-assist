// const { transporter } = require('../mail.js');

const pool = require('../db_conn.js');

function makeid(length) {
    var result           = 'ID_';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const postOrder = (req, res, next) => {
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
    pool.query(sql, [req_data] , function (err, result) {
        if (err) throw err;
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