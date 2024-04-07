const { sequelize, Player } = require('../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

describe('Player Model', () => {
  it('Should create a player row', async () => {
    const jokic = await Player.create({
      name: 'jokic',
      points: 23,
      rebounds: 14,
      assists: 9,
    });

    expect(jokic.name).toEqual('jokic');
    expect(jokic.points).toEqual(23);
    expect(jokic.rebounds).toEqual(14);
    expect(jokic.assists).toEqual(9);
  });

  xit('Should read a pokemon from the table', async () => {});
});