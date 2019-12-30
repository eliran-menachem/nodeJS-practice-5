var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users list');
});
router.get('/delete', function(req, res, next) {
  res.send('delete user');
});

router.post('/', function(req, res, next) {
  console.log(req.body); // this is the parameter in body
  console.log(req.query); // this is the parameter on URL
  console.log(req.params);
  res.send('[POST] users');
});
router.post('/:id', function(req, res, next) {
  console.log(req.params);
  res.send('[POST] users');
});

module.exports = router;
