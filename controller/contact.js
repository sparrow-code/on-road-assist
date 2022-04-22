const pool = require('../db_conn.js');


const postContact = (req, res, next) => {

    var req_data = [
        req.body.usr_name,
        req.body.usr_email,
        req.body.usr_msg,
    ];

    var sql = "INSERT INTO `reach_us`(`user_name`, `e_mail`, `user_msg`) " +
    " VALUES (?)";
    pool.query(sql, [req_data] , function (err, result) {
        if (err) throw err;
    });

    /* 
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
 */
    res.redirect('/');

}

module.exports = {
    postContact
}