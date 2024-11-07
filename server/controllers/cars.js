const Car =  require("../models/cars");

exports.getAllCars = async (req, res, next) => {
    try {
        const data = await Car.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Cars was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Cars was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getCarById = async (req, res, next) => {
    try {
        const data = await Car.findById(req.params.id);
        if (data) { // už se nejedná o array
            return res.status(200).send({
                message: "Car was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Car was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createCar = async (req, res, next) => {
    try {
        const data = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            motor: req.body.motor
        });
        const result = await data.save();
        if(result) return res.status(201).send({
            message: "Car was created",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateCar = async (req, res, next) => {
    try {
        const data = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            motor: req.body.motor
        };
        const result = await Car.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
        if(result) return res.status(200).send({
            message: "Car was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteCar = async (req, res, next) => {
    try {
        const result = await Car.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
        if(result) return res.status(200).send({
            message: "Car was deleted",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};