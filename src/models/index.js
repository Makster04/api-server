'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PlayerSchema = require('./Player/Player'); 
const TeamSchema = require('./Team/Team')

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  Player: PlayerSchema(sequelize, DataTypes),
  Team: TeamSchema(sequelize, DataTypes),
  sequelize
}

// 'use strict';

// const { Sequelize, DataTypes } = require('sequelize');
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
// const PokemonSchema = require('./Pokemon'); 

// const sequelize = new Sequelize(DATABASE_URL);

// module.exports = {
//   Pokemon: PokemonSchema(sequelize, DataTypes),
//   sequelize
// }