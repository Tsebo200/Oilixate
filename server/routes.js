const express = require('express');
const productSchema = require('./models/products');

const router = express();

router.post('/api/addproduct', (req, res) => {
    const newProduct  = new productSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        description: req.body.description,
        disclaimer: req.body.disclaimer,
        size: req.body.size,
        quantity: req.body.quantity,
        inStock: req.body.inStock,
    });

    newProduct.save()
    .then(item => {
        express.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was ana error", err});
    });
});


module.exports = router;