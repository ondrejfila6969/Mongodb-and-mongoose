const express = require('express');
const router = express.Router();
const live = require("../controllers/liveEvent");


router.get('/',live.getAllEvents);
router.get('/:id', live.getEventById);
router.post('/', live.createEvent);
router.put('/:id', live.updateEvent);
router.delete('/:id', live.deleteEvent);

module.exports = router;