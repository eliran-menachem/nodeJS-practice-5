var express = require('express');
var router = express.Router();

products = [
    {id:1,name:"HDD",price:600,weight:25},
    {id:2,name:"Car",price:80000,weight:25000},
    {id:3,name:"Key",price:10,weight:10},
    {id:4,name:"Shirt",price:50,weight:6}
]

/* GET pruducts page. */
router.get('/', function(req, res, next) {
  res.end( '[GET] pruducts page' );
});


module.exports = router;
