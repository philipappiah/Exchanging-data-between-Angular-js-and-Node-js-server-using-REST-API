const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
'data','cart.json');
module.exports = class cart{

    static addProduct(id, productPrice){
        fs.readFile(p, (err, fileContent)=>{
            let cart = {products:[], totalPrice:0};
            if(!err){
                cart = JSON.parse(fileContent);

            }
            const exisitingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const exisitingProduct = cart.products[exisitingProductIndex];
            let updatedProduct;
            if(exisitingProduct){
                updatedProduct = {...exisitingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[exisitingProductIndex]= updatedProduct;
                 
            }else{
                updatedProduct = {id:id,qty:1};
                cart.products = [...cart.products,updatedProduct];
            }
            cart.totalPrice= cart.totalPrice + +productPrice;
           fs.writeFile(p,JSON.stringify(cart),(err) =>{
               console.log(err); 
           });
        });
        // Fetch the previous cart
        // Analyze the cart => Find exisiting product
        // Add new product/ increase quantity

    }
    


}