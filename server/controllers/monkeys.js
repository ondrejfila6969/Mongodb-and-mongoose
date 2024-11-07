const Monkey = require("../models/monkeys");

exports.getAllMonkeys = async (req, res, next) => {
    try {
        const data = await Monkey.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Monkeys founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Monkeys not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAllMonkeysById = async (req, res, next) => {
    try {
        const data = await Monkey.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Monkey was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Monkey not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createMonkey = async (req, res, next) => {
    try {
        const data = new Monkey({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        });
        const result = await data.save();
        if(result) return res.status(201).send({
            message: "Monkey was created",
            payload: result
        });
        res.status(404).send({
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateMonkey = async (req, res, next) => {
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        };
        const result = await Monkey.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
        if(result) return res.status(200).send({
            message: "Monkey was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteMonkey = async (req, res, next) => {
    try {
        const result = await Monkey.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
        if(result) return res.status(200).send({
            message: "Monkey deleted",
            payload: result
        });
        res.status(404).send({
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};