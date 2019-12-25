var express = require('express');
var router = express.Router();

products = [
    {id:1,name:"HDD",price:600,weight:25},
    {id:2,name:"Car",price:80000,weight:25000},
    {id:3,name:"Key",price:10,weight:10},
    {id:4,name:"Shirt",price:50,weight:6}
]
orders = [
    {id:1,date:"10-10-2019",sum:2000,products:[]},
    {id:2,date:"21-09-2019",sum:5550,products:[1,3,4]},
    {id:3,date:"13-12-2019",sum:300,products:[2,3]},
    {id:4,date:"22-02-2019",sum:4000,products:[1,2]}
]

/* GET orders page. */
router.get('/', function(req, res, next) {
  res.end( '[GET] orders page' );
});


module.exports = router;
