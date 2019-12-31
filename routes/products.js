var express = require('express');
var router = express.Router();
let arrOfIdThatDeleted = [];

products = [
  { id: 1, name: "HDD", price: 600, weight: 25 },
  { id: 2, name: "Car", price: 80000, weight: 25000 },
  { id: 3, name: "Key", price: 10, weight: 10 },
  { id: 4, name: "Shirt", price: 50, weight: 6 },
  { id: 5, name: "t-Shirt", price: 75, weight: 4 }
]

/* GET pruducts page. */
router.get('/', function (req, res, next) {
  res.status(products ? 200 : 200).json(products);
});

router.delete('/:id', (req, res, next) => {
  let found = products.find((p) => p.id == req.params.id)
  if (found) {
    let indexOfProductThatFound = products.indexOf(found)
    let deletedProduct = products.splice(indexOfProductThatFound, 1);
    arrOfIdThatDeleted.push(deletedProduct[0].id)
    console.log(arrOfIdThatDeleted);



    res.status(200).send('Your request was successful ');
  } else {
    res.status(204).send('does not exist');
  }
})

// [POST] products
router.post('/', (req, res, next) => {
  let newId;
  if (arrOfIdThatDeleted.length > 0) {

    for (let i = 0; i < arrOfIdThatDeleted.length; i++) {
      newId = arrOfIdThatDeleted.splice(i, 1);
      for (let x = 0; x < newId.length; x++) {
        newId = newId[x];
      }
      break
    }
  }
  else {
    newId = (products.length) + 1;
  }


products.push({id:newId,name: req.body.name,price:req.body.price})
  res.json(products);

})

// [PUT// products/:id]
router.put('/:id', (req, res, next) => {
  let found = products.find(p => p.id == req.params.id);
  if (found) {
    
    res.json(found)

  }else{
    res.send('no exist').status(204)
  }
});


module.exports = router;
