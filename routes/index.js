//jshint esversion:6

var express = require('express');
var router = express.Router();
const messages = require("../public/javascripts/messages.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
});

router.get("/new", function(req, res, next) {
  res.render("form", { title: "Mini Messageboard", messages:messages });
});

router.post("/new", function(req, res, next) {
  const newMessage = {
    title: req.body.title,
    message: req.body.message,
    date: new Date()
  };
  console.log(newMessage);
  messages.push({text: req.body.message, user: req.body.title, add: new Date()});
  res.redirect("/");
});

module.exports = router;
