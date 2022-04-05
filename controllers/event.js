const db = require('../models');
const Event = db.event;

// get event
exports.getEvent = (req, res) => {
  const eventName = req.params.eventName;
  Event.find({ title: eventName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found event with name: ' + eventName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving event with eventName=' + eventName,
        error: err
      });
    });
};

// create event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title || !req.body.done || !req.body.date || !req.body.description) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const event = new Event(req.body);
  event
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the event.'
      });
    });
};

// get all event 
exports.getAll = (req, res) => {
  Event.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving events.'
      });
    });
};
