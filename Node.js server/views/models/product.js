const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product{
    constructor(title,imageUrl,description,price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
       products.push(this);
    }

    static fetchAll() {
        fs.readFile(p, (err, fileContent) =>{
            if(err){
                return [];

            }
            return JSON.parse(fileContent);

        });
       
      
    }
}