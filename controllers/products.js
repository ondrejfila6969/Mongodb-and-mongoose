const Product = require("../models/products");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Products was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Products was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAllProductsById = async (req, res, next) => {
    try {
        const data = await Product.findById(req.params.id);
        if (data) { // už se nejedná o array
            return res.status(200).send({
                message: "Product was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Product was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const data = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });
        const result = await data.save();
        if(result) return res.status(201).send({
            message: "Product was created",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        };
        const result = await Product.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
        if(result) return res.status(200).send({
            message: "Product was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
        if(result) return res.status(200).send({
            message: "Product was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};