const { sequelize, Player } = require('../src/models'); // Corrected the import path

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

describe('Team Model', () => {
  it('Should create a team row', async () => {
    const nuggets = await Team.create({
      name: 'Nuggets',
      location: 'Denver',
      wins: 32,
      losses: 10
    });

    expect(nuggets.name).toEqual('Nuggets');
    expect(nuggets.location).toEqual('Denver');
    expect(nuggets.wins).toEqual(32);
    expect(nuggets.losses).toEqual(10);
  });

  xit('Should read a team from the table', async () => {});
});

// const { sequelize, Pokemon } = require('../src/models');

// // setup script
// beforeAll(async () => {
//   await sequelize.sync();
// });

// describe('Pokemon Model', () => {
//   it('Should create a pokemon row', async () => {
//     const pikachu = await Pokemon.create({
//       name: 'Pikachu',
//       type: 'electric',
//       healthPoints: 50,
//       attackPoints: 70
//     });

//     expect(pikachu.name).toEqual('Pikachu');
//     expect(pikachu.type).toEqual('electric');
//     expect(pikachu.healthPoints).toEqual(50);
//     expect(pikachu.attackPoints).toEqual(70);
//   });

//   xit('Should read a pokemon from the table', async () => {});
// });