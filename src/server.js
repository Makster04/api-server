'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/Player');
const teamRoutes = require('./routes/Team');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', playerRoutes); // Prefix player routes with '/api'
app.use('/api', teamRoutes);   // Prefix team routes with '/api'

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Export the app
module.exports = app;

// Starting the server
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