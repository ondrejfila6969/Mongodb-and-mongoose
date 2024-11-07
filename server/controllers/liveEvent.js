const Event2 = require("../models/liveEvent");

exports.getAllEvents = async (req, res, next) => {
    try {
        const data = await Event2.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Event was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Event was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getEventById = async (req, res, next) => {
    try {
        const data = await Event2.findById(req.params.id);
        if (data) { // už se nejedná o array
            return res.status(200).send({
                message: "Event was founded",
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

exports.createEvent = async (req, res, next) => {
    try {
        const data = new Event2({
            place: req.body.place,
            green: req.body.green,
            animal: req.body.animal
        });
        const result = await data.save();
        if(result) return res.status(201).send({
            message: "Event was created",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateEvent = async (req, res, next) => {
    try {
        const data = {
            place: req.body.place,
            green: req.body.green,
            animal: req.body.animal
        };
        const result = await Event2.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
        if(result) return res.status(200).send({
            message: "Event was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteEvent = async (req, res, next) => {
    try {
        const result = await Event2.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
        if(result) return res.status(200).send({
            message: "Event was deleted",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};