const express = require('express');
const router = express.Router();
const history = require("../controllers/historicEvent");


router.get('/', history.getAllEvents);
router.get('/:id', history.getEventById);
router.post('/', history.createEvent);
router.put('/:id', history.updateEvent);
router.delete('/:id', history.deleteEvent);

module.exports = router;