'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const playerRouter = require('./routes/Player');
const teamRouter = require('./routes/Team');

const app  = express();
app.use(cors());
app.use(express.json());

// apply routing
app.use('/api', playerRouter);
app.use('/api', teamRouter);


module.exports = {
  start: (port) => app.listen(port, () => {
    console.log('API SERVER RUNNING ON PORT ::', port);
  }),
  app,
};

// 'use strict';

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const pokemonRouter = require('./routes/Pokemon');

// const app  = express();
// app.use(cors());
// app.use(express.json());

// // apply routing
// app.use('/api', pokemonRouter);

// module.exports = {
//   start: (port) => app.listen(port, () => {
//     console.log('API SERVER RUNNING ON PORT ::', port);
//   }),
//   app,
// };