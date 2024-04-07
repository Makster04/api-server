'use strict';
// using sequelize to model out data, the string is the table name
const Player = (sequelize, DataTypes) => sequelize.define('Player', {
  name: DataTypes.STRING(100),
  points: DataTypes.INTEGER,
  rebounds: DataTypes.FLOAT,
  assists: DataTypes.INTEGER,
});

module.exports = PlayerSchema;
