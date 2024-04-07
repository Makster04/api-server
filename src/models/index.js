'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const CountrySchema = require('./country.js'); 
const CitySchema = require('./city.js');
const Collection = require('./collection.js');

const sequelize = new Sequelize(DATABASE_URL);

const Country = CountrySchema(sequelize, DataTypes);
const City = CitySchema(sequelize, DataTypes);

module.exports = {
  Country,
  City,
  sequelize,
  Collection,
};
