'use strict';
const express = require('express');
const { Country, Collection } = require('../models/index.js');
const { validateId, validateBody } = require('../middleware/validator.js');

const router = express.Router();
const CountryCollection = new Collection(Country);

router.post('/', validateBody, async(req, res) => {
  let record = await CountryCollection.create(req.body);
  res.json(record);
});

router.get('/', async (req, res) => {
  let records = await CountryCollection.read();
  console.log(records);
  res.json(records);
});

router.get('/:id', validateId, async (req, res) => {
  let records = await CountryCollection.read(req.params.id);
  res.json(records);
});

router.put('/:id', validateId, async (req, res) => {
  let records = await CountryCollection.update(req.params.id, req.body);
  res.json(records);
});

router.delete('/:id', validateId, async (req, res) => {
  let records = await CountryCollection.delete(req.params.id);
  res.json(records);
});

module.exports = router; 
