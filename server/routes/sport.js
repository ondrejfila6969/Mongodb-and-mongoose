const express = require('express');
const router = express.Router();
const sportController = require("../controllers/sport")


router.get('/', sportController.getAllSports);
router.get('/:id', sportController.getSportById);
router.post('/', sportController.createSport);
router.put('/:id', sportController.updateSport);
router.delete('/:id', sportController.deleteSport);

module.exports = router;