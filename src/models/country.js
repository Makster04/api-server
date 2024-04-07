'use strict';
const Country = (sequelize, DataTypes) => sequelize.define('Country', {
  name: DataTypes.STRING(100),
  population: DataTypes.INTEGER,
  HDI: DataTypes.FLOAT,
  nativeLanguage: DataTypes.STRING(20),
});
module.exports = Country;
