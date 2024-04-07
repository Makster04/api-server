'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const countryRouter = require('./routes/country.js');
const cityRouter = require('./routes/city.js');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(logger);

app.use('/api/country', countryRouter);
app.use('/api/city', cityRouter);

app.use(serverError);
app.use(notFound);

module.exports = {
  start: (port) => app.listen(port, () => {
    console.log(`API SERVER RUNNING ON PORT :: ${port}`);
  }),
  app,
};

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
