var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end( '[GET] index page' );
});
router.get('/delete', function(req, res, next) {
  res.end( '[GET] delete page' );
});




module.exports = router;
