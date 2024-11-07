const Event = require("../models/historicEvent");

exports.getAllEvents = async (req, res, next) => {
    try {
        const data = await Event.find();
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
        const data = await Event.findById(req.params.id);
        if (data) { // už se nejedná o array
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

exports.createEvent = async (req, res, next) => {
    try {
        const data = new Event({
            name: req.body.name,
            date: req.body.date,
            place: req.body.place
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
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        };
        const result = await Event.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
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

exports.deleteEvent = async (req, res, next) => {
    try {
        const result = await Event.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
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