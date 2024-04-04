'use strict';

const express = require('express');
const { Player } = require('../models'); // Corrected import for Player model
const { Team } = require('../models'); // Added import for Team model

const router = express.Router();

// Reading from the player table
router.get('/player', async (req, res) => {
  let records = await Player.findAll();
  res.json(records);
});

router.get('/player/:id', async (req, res) => {
  let record = await Player.findOne({ where: { id: req.params.id } });
  res.json(record);
});

// Create a new player in the table
router.post('/player', async (req, res) => {
  let record = await Player.create(req.body);
  res.json(record);
});

// Update an existing player in the table
router.put('/player/:id', async (req, res) => {
  let record = await Player.update(req.body, { where: { id: req.params.id } });
  res.json(record);
});

// Remove an existing player from the table
router.delete('/player/:id', async (req, res) => {
  await Player.destroy({ where: { id: req.params.id } });
  res.status(204).end();
});

// Similar routes for teams can be added

module.exports = router;


// 'use strict';

// // define all routing logic for our RESTful service
// const express = require('express');
// const { Pokemon } = require('../models');

// const router = express.Router();

// // router.use(validator);

// // reading from the pokemon table
// router.get('/pokemon', async (req, res) => {
//   let records = await Pokemon.findAll();
//   res.json(records);
// });

// router.get('/pokemon/:id', async (req, res) => {
//   let records = await Pokemon.findOne({ where: { id: req.params.id} });
//   res.json(records);
// });

// // create a new pokmeon in the table
// router.post('/pokemon',  async(req, res) => {
//   // where is the pokemon data?
//   let record = await Pokemon.create(req.body);
//   res.json(record);
// });

// //update an existing pokemon in the table
// router.put('/pokemon/:id', (req, res) => {});

// // remove an existing pokemon in the table
// router.delete('/pokemon/:id', (req, res) => {});

// module.exports = router;