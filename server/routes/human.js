const express = require('express');
const router = express.Router();
const humanControllers = require("../controllers/human");

router.get('/', humanControllers.getAllHumans);
router.get('/:id', humanControllers.getHumanById);
router.post('/', humanControllers.createHuman);
router.put('/:id', humanControllers.updateHuman);
router.delete('/:id', humanControllers.deleteHuman);

module.exports = router;
