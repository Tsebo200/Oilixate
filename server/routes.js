const express = require('express');
const productSchema = require('./models/products');

const router = express();

router.post('/api/addproduct', (req, res) => {
    const newProduct  = new productSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        // description: req.body.description,
        // disclaimer: req.body.disclaimer,
        // size: req.body.size,
        // quantity: req.body.quantity,
        // inStock: req.body.inStock,
    });

    newProduct.save()
    .then(item => {
       res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error", err});
    });
});

router.get('/api/allproducts', async (req, res) => {
    const findProducts = await productSchema.find();
    res.json(findProducts);
});

router.get('/api/oneproduct/:id', async (req, res) => {
    const findProducts = await productSchema.findById(req.params.id);
    res.json(findProducts);
})

module.exports = router;