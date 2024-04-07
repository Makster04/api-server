'use strict';

const { Player, Collection } = require('../models');

const express = require('express');
const router = express.Router();

const playerCollection = new Collection(Player);

router.get('/players', async (req, res) => {
  let players = await playerCollection.read();
  res.json(players);
});

router.get('/players/:id', async (req, res) => {
  let player = await playerCollection.readOne(req.params.id);
  res.json(player);
});

router.post('/players', async (req, res) => {
  let player = await playerCollection.create(req.body);
  res.json(player);
});

router.put('/players/:id', async (req, res) => {
  let player = await playerCollection.update(req.params.id, req.body);
  res.json(player);
});

router.delete('/players/:id', async (req, res) => {
  let player = await playerCollection.delete(req.params.id);
  res.json(player);
});

module.exports = router;
