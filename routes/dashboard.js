var express = require("express");
var router = express.Router();

const { dashboard } = require("../controller/dashboard.js");
const pool = require("../db_conn.js");

router.get("/", (req, res) => {
  if (req.session.officeID) {
    var send_data = {
      title: "Dashboard - OnRoad Assist",
      login: true,
      user_name: req.session.userName,
    };
    res.render("dashboard", { data: send_data });
  } else {
    res.redirect("/login");
  }
});

router.get("/recent-order", (req, res) => {
  if (req.session.officeID) {
    const sql = "SELECT * FROM `order_Data` ORDER BY `ID` DESC LIMIT 10 ";

    pool.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);

        var send_data = {
          title: "Recent Order | Dashboard - OnRoad Assist",
          login: true,
          user_name: req.session.userName,
        };
        res.render("dashboard_recent_order", { data: send_data , messages : result });
      }

    });

  } else {
    res.redirect("/login");
  }
});

router.get("/message", (req, res) => {
  if (req.session.officeID) {
    const sql =
      " SELECT `id`, `user_name`, `e_mail`, `user_msg` FROM `reach_us` " +
      "ORDER BY `id` DESC LIMIT 10 ";

    pool.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {

        var send_data = {
          title: "Messages | Dashboard - OnRoad Assist",
          login: true,
          user_name: req.session.userName,
        };

        res.render("dashboard_message", { data: send_data, messages: result });
      }
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
