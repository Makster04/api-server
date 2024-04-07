'use strict';
const express = require('express');
const { City } = require('../models/index.js');
const { validateId, validateBody } = require('../middleware/validator.js');

const router = express.Router();

router.post('/', validateBody, async(req, res) => {
  let record = await City.create(req.body);
  res.json(record);
});

router.get('/', async (req, res) => {
  let records = await City.findAll();
  res.json(records);
});

router.get('/:id', validateId, async (req, res) => {
  let records = await City.findOne({ where: { id: req.params.id} });
  res.json(records);
});

router.put('/:id', validateId, async (req, res) => {
  let city = await City.findOne({ where: { id: req.params.id} });
  let records = await city.update(req.body, {returning:true});
  await city.save();
  res.json(records);
});

router.delete('/:id', validateId, async (req, res) => {
  let city = await City.findOne({ where: { id: req.params.id} });
  let records = city.destroy();
  res.json(records);
});

module.exports = router; 
