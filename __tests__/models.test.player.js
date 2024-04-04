// models.test.players.js
const { sequelize, Player } = require('../src/models'); // Corrected the import path

// setup script
beforeAll(async () => {
  await sequelize.async();
});

describe('Player Model', () => {
  it('Should create a player row', async () => {
    const Jokic = await Player.create({
      name: 'Nikola Jokic',
      position: 'Center',
      Points: 32,
      Rebounds: 14,
      Assits: 9
    });

    expect(Jokic.name).toEqual('Nikola Jokic');
    expect(Jokic.position).toEqual('Center');
    expect(Jokic.Points).toEqual(32);
    expect(Jokic.Rebounds).toEqual(14);
    expect(Jokic.Assits).toEqual(9);
  });

  xit('Should read a player from the table', async () => {});
});


// const { sequelize, Pokemon, Player } = require('../src/models');

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