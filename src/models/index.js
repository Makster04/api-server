'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PlayerSchema = require('./players.js'); 
const TeamSchema = require('./teams.js');
const Collection = require('./collection.js');


const sequelize = new Sequelize(DATABASE_URL);

const Player = PlayerSchema(sequelize, DataTypes);
const Team = TeamSchema(sequelize, DataTypes);

Team.hasMany(Team, {foreignKey: 'personId', sourceKey: 'id' });
Player.belongsTo(Player, {foreignKey: 'personId', targetKey: 'id'});


module.exports = {
  Player,
  Team,
  sequelize,
  Collection,
};