'use strict';
// using sequelize to model out data, the string is the table name
const Team = (sequelize, DataTypes) => sequelize.define('Team', {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  wins: DataTypes.INTEGER,
  losses: DataTypes.INTEGER,
});

module.exports = Team;

// 'use strict';
// // using sequelize to model out data, the string is the table name
// const Pokemon = (sequelize, DataTypes) => sequelize.define('Pokemon', {
//   name: DataTypes.STRING,
//   type: DataTypes.STRING,
//   healthPoints: DataTypes.INTEGER,
//   attackPoints: DataTypes.INTEGER,
// });

// module.exports = Pokemon;