const Product  = require('../models/product');
const Cart = require('../models/cart');
    exports.getProducts = (req,res,next)=>{
        
        Product.fetchAll(products => {
            res.render('shop/product-list',{prods:products, docTitle: 'All Products', path: '/', 
            path:'/products'});
        });
       
        };

        exports.getIndex = (req,res,next) =>{
            Product.fetchAll(products => {
                res.render('shop/index',{prods:products, docTitle: 'Shop',path:'/'});
            });

        };

        exports.getProduct = (req,res, next) =>{
            const prodId = req.params.productId;
            Product.findById(prodId, product =>{
                
             res.render('shop/product-detail',{product:product, docTitle:'Product detail',path:'/products'});
            });
           
        }


        exports.postCart = (req, res, next) =>{

            const prodId = req.body.productId;
            Product.findById(prodId, (product) =>{
                Cart.addProduct(prodId,product.price);

            });
            res.redirect('/cart');

        }

        exports.getCart = (req,res,next) =>{
            res.render('shop/cart',{path:'/cart',docTitle:'Your cart'});
        }


        exports.getOrders = (req,res,next) =>{
            res.render('shop/orders',{path:'/orders',docTitle:'Your orders'});
        }


        exports.getCheckout = (req,res,next) =>{
            res.render('shop/checkout',{path:'/checkout',docTitle:'Checkout'});
        }