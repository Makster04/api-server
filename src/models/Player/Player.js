'use strict';
// using sequelize to model out data, the string is the table name
const Player = (sequelize, DataTypes) => sequelize.define('Player', {
  name: DataTypes.STRING,
  position: DataTypes.STRING,
  Points: DataTypes.INTEGER, // Make sure it's "points" instead of "Points" if you intend to access it as "Jokic.Points"
  Rebounds: DataTypes.INTEGER,
  Assists: DataTypes.INTEGER,
});

module.exports = Player;


// 'use strict';
// // using sequelize to model out data, the string is the table name
// const Pokemon = (sequelize, DataTypes) => sequelize.define('Pokemon', {
//   name: DataTypes.STRING,
//   type: DataTypes.STRING,
//   healthPoints: DataTypes.INTEGER,
//   attackPoints: DataTypes.INTEGER,
// });

// module.exports = Pokemon;