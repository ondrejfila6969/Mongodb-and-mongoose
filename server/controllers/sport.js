const Sport = require("../models/sport");

exports.getAllSports = async (req, res, next) => {
    try {
        const data = await Sport.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Sports was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Sports was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getSportById = async (req, res, next) => {
    try {
        const data = await Sport.findById(req.params.id);
        if (data) { // už se nejedná o array
            return res.status(200).send({
                message: "Sport was founded",
                payload: data
            });
        }
        res.status(404).send({
            message: "Sport was not founded"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createSport = async (req, res, next) => {
    try {
        const data = new Sport({
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport
        });
        const result = await data.save();
        if(result) return res.status(201).send({
            message: "Sport was created",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateSport = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport
        };
        const result = await Sport.findByIdAndUpdate(req.params.id, data); // 1) id, 2) data, co chci nahradit
        if(result) return res.status(200).send({
            message: "Sport was updated",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteSport = async (req, res, next) => {
    try {
        const result = await Sport.findByIdAndDelete(req.params.id); // Jaký produkt chci smazat
        if(result) return res.status(200).send({
            message: "Sport deleted",
            payload: result
        });
        res.status(404).send({ // Lze psát stavový kod 500
            message: "Wrong input !!!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};