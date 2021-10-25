//COMP 229-005 Assignment 2
//Author: Camila Nieto
//ID: 301175110
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
