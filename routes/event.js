
const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');


router.get('/', eventController.getAll);

router.get('/:eventName', eventController.getEvent);

router.post('/create', eventController.create);

module.exports = router;