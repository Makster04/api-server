'use strict';

const team = (sequelize, DataTypes) => {
  return sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = team;


// 'use strict';

// const orders = (sequelize, DataTypes) => {
//   return sequelize.define('Orders', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     customerId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   });
// }

// module.exports = orders;