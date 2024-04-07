'use strict';
const City = (sequelize, DataTypes) => sequelize.define('City', {
  name: DataTypes.STRING(100),
  population: DataTypes.INTEGER,
  HDI: DataTypes.FLOAT,
  nativeLanguage: DataTypes.STRING(20),
});
module.exports = City;
