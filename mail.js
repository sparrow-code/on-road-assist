/* 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    pool: true,
    host: "sg2plzcpnl490050.prod.sin2.secureserver.net",
    port: 465, // 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "admin@zeroxbit.com", // generated ethereal user
        pass: "Shivam@123", // generated ethereal password
    },
    maxConnections : 2,
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

module.exports = {
    transporter
}
 */