const { config } = require("../db_conn.js");
const pool = require("../db_conn.js");
const { connect } = require("../routes/order.js");

var postLogin = (req, res, next) => {
  // var session;

  let req_data = {
    user_name: req.body.userName,
    user_password: req.body.pswd,
  };

  var sql =
    " SELECT `officeID`, `userName`, `userPassword`, `role` FROM `users` WHERE `userName` = (?) AND `userPassword` = (?) ";
  pool.query( sql, [req_data.user_name, req_data.user_password], function (err, result) {
      if (err) throw err;

      if (result.length != 0) {
        session = req.session;

        session.officeID = result[0].officeID;
        session.role = result[0].role;
        session.userName = result[0].userName;


        res.redirect("/dashboard");
      } else {
        res.redirect("/login");
      }
    }
  );
};

module.exports = {
  postLogin,
};
