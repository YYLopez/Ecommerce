var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [

    new Product({
        imagePath: '../public/images/productos/producto1-1.jpg',
        title: 'T- Shirt Mistral',
        description: 'Awesome Product',
        price: 10
    }),

    new Product({
        imagePath: '../public/images/productos/producto2-1.jpg',
        title: 'T- Shirt Mistral',
        description: 'Awesome Product',
        price: 20
    }),

    new Product({
        imagePath: '../public/images/productos/producto3-1.jpg',
        title: 'T- Shirt Mistral',
        description: 'Awesome Product',
        price: 40
    }),

    new Product({
        imagePath: '../public/images/productos/producto2-1.jpg',
        title: 'T- Shirt Mistral',
        description: 'Awesome Product',
        price: 50
    }),

    new Product({
        imagePath: '../public/images/productos/producto1-1.jpg',
        title: 'T- Shirt Mistral',
        description: 'Wonderful Product',
        price: 100
    })

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
            done++;
            if (done == products.length) {
                exit();
            }
        }
    );

}

function exit() {
    mongoose.disconnect();
}