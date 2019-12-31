var express = require('express');
var router = express.Router();

products = [
  { id: 1, name: "HDD", price: 600, weight: 25 },
  { id: 2, name: "Car", price: 80000, weight: 25000 },
  { id: 3, name: "Key", price: 10, weight: 10 },
  { id: 4, name: "Shirt", price: 50, weight: 6 },
  { id: 5, name: "t-Shirt", price: 75, weight: 4 }
]
orders = [
  { id: 1, date: "10-10-2019", sum: 2000, products: [3] },
  { id: 2, date: "21-09-2019", sum: 5550, products: [1, 3, 4] },
  { id: 3, date: "13-12-2019", sum: 300, products: [2, 3] },
  { id: 4, date: "22-02-2019", sum: 4000, products: [1, 2] }
]

/* GET orders page. */
router.get('/', function (req, res, next) {
  // res.send('[GET] orders page')
  res.status(orders.length ? 200 : 204).json(orders);
});

// orders/:id
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  let orderNum = orders.find((index) => index.id == id)
  res.status(orderNum ? 200 : 204).json(orderNum);
});


// orders/:id/products
router.get('/:id/products', (req, res, next) => {
  let id = req.params.id;
  let found = orders.find((index) => index.id == id);
  res.status(found ? 200 : 204);
  let result = [];
  let productsInOrder = found.products
  res.status(productsInOrder ? 200 : 204);
  if (productsInOrder) {
    // productsInOrder.forEach((element, index) => {
    //       console.log();
    // });

    for (let i = 0; i < productsInOrder.length; i++) {
      let p = products.find(o => o.id == found.products[i])
      p ? result.push(p) : null
    }
    res.json(result)
  }
})


module.exports = router;
