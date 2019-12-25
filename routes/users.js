var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users list');
});
router.get('/delete', function(req, res, next) {
  res.send('delete user');
});

module.exports = router;
