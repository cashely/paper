var express = require('express');
var router = express.Router();
const initWx = require('./initWx.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '医睦药事期刊201706' });
});

module.exports = router;
