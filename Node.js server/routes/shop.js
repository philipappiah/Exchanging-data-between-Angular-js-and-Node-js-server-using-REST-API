const express = require('express');
var path = require('path');
const shopController = require('../controllers/shop');
const cors = require('cors');
const router = express.Router();




router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);


router.post('/cart',shopController.postCart);

router.get('/mydata', function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
   // var data = {"page":1,"per_page":3,"total":12,"total_pages":4,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"/public/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"/public/128.2.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"/public/128.3.jpg"}]}
    
    res.json({"page":1,"per_page":3,"total":12,"total_pages":4,
    "data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"http://localhost:3000/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"http://localhost:3000/128.2.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"http://localhost:3000/128.3.jpg"}]
      ,"data2":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"http://localhost:3000/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"http://localhost:3000/128.2.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"http://localhost:3000/128.3.jpg"}],
      "data3":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"http://localhost:3000/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"http://localhost:3000/128.2.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"http://localhost:3000/128.3.jpg"}],
      "data4":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"http://localhost:3000/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"http://localhost:3000/128.2.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"http://localhost:3000/128.3.jpg"}]  });

});


router.options('/enroll',cors());


router.post('/enroll', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  console.log(req.body);
  res.status(401).send({"message":"Data received"});
})



router.get('/cart',shopController.getCart);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);

    



module.exports = router;