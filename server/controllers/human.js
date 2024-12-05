const Human = require("../models/human");

exports.getAllHumans = async (req, res) => {
    try {
        const data = await Human.find();
        if(data && data.length !== 0) {
            return res.status(200).send({
                message: "Humans found",
                payload: data
            })
        }
        res.status(404).send({
            message: "Humans not found"
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.getHumanById = async (req, res) => {
    try {
        const data = await Human.findById(req.params.id);
        if(data) {
            return res.status(200).send({
                message: "Human found",
                payload: data
            })
        }
        res.status(404).send({
            message: "Human not found"
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.createHuman = async (req, res) => {
    try {
        const data = new Human({
            gender: req.body.gender,
            age: req.body.age,
            height: req.body.height
        })
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "Human created",
                payload: result
            })
        }
        res.status(404).send({
            message: "Human not created"
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.updateHuman = async (req, res) => {
    try {
        const data = {
            gender: req.body.gender,
            age: req.body.age,
            height: req.body.height
        }
        const result = await Human.findByIdAndUpdate(req.params.id, data);
        if(result) {
            return res.status(200).send({
                message: "Human updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "Human not updated"
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.deleteHuman = async (req, res) => {
    try {
        const result = await Human.findByIdAndDelete(req.params.id);
        if(result) {
            return res.status(200).send({
                message: "Human deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "Human not deleted"
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};