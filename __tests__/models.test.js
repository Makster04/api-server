// models.test.js

const { sequelize, Player, Team } = require('../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

// PLAYER MODEL
describe('Player Model', () => {
  it('Should create a player row', async () => {
    const jokic = await Player.create({
      name: 'Jokic',
      position: 'Center',
      points: 32, // Adjusted to lowercase points
      rebounds: 9, // Adjusted to lowercase rebounds
      assists: 12 // Adjusted to lowercase assists
    });

    expect(jokic.name).toEqual('Jokic');
    expect(jokic.position).toEqual('Center'); // Adjusted to position
    expect(jokic.points).toEqual(32);
    expect(jokic.rebounds).toEqual(9);
    expect(jokic.assists).toEqual(12);
  });

  xit('Should read a player from the table', async () => {});
});

// TEAM MODEL
describe('Team Model', () => {
  it('Should create a team row', async () => {
    const nuggets = await Team.create({
      name: 'Nuggets',
      location: 'Denver',
      wins: 32,
      losses: 10
    });

    expect(Team.name).toEqual('Nuggets'); // Adjusted to nuggets
    expect(Team.location).toEqual('Denver');
    expect(Team.wins).toEqual(32);
    expect(Team.losses).toEqual(10);
  });

  xit('Should read a team from the table', async () => {});
});
