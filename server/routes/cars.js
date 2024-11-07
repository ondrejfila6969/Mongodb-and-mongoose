const express = require('express');
const router = express.Router();
const carsControllers = require("../controllers/cars");


router.get('/', carsControllers.getAllCars);
router.get('/:id', carsControllers.getCarById);
router.post('/', carsControllers.createCar);
router.put('/:id', carsControllers.updateCar);
router.delete('/:id', carsControllers.deleteCar);

module.exports = router;