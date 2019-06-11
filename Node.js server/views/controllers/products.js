const Product  = ('../models/product');
exports.getAddProduct = ('/add-product',(req,res,next)=>{
    res.render('add-product',{docTitle: 'Add Product', path: '/admin/add-product'});
    //res.sendFile(path.join(rootDir, 'views' , 'add-product.html'))
    
    });


    exports.postAddProducts = (req, res, next)=>{
        const product = new Product(req.body.title);
        product.save();

        //products.push({title: req.body.title});
        res.redirect('/');
    };


    

    exports.getProducts = (req,res,next)=>{
        
        const products = Product.fetchAll();
        res.render('shop',{prods:products, docTitle: 'Shop', path: '/', 
        hasProducts: products.length > 0,activeShop:true,productCSS:true});
        };

        