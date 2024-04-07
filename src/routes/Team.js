'use strict';

// define all routing logic for our RESTful service
const express = require('express');
const { Team } = require('../models');
const { validateId, validateBody } = require('../middleware/validator.js');

const router = express.Router();

//use validateBody
router.post('/', validateBody, async(req, res) => {
  let record = await Team.create(req.body);
  res.json(record);
});


router.get('/', async (req, res) => {
  let records = await Team.findAll();
  res.json(records);
});

//use validateID
router.get('/:id', validateId, async (req, res) => {
  let records = await Team.findOne({ where: { id: req.params.id} });
  res.json(records);
});

//use validateID
router.put('/:id', validateId, async (req, res) => {
  let person = await Team.findOne({ where: { id: req.params.id} });
  let records = await Player.update(req.body, {returning:true});
  await person.save();
  res.json(records);
  
});

//use validateID
router.delete('/:id', validateId, async (req, res) => {
  let person = await Team.findOne({ where: { id: req.params.id} });
  let records = Player.destroy();
  res.json(records);
  
});

module.exports = router; 

