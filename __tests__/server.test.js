const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize, Player, Team } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sync the database before running tests
});

afterAll(async () => {
  await sequelize.close(); // Close the database connection after all tests are done
});

describe('Player routes', () => {
  it('Should get all players from the database', async () => {
    // Add some mock players to the database
    await Player.bulkCreate([
      { name: 'Player 1', position: 'Position 1', Points: 10, Rebounds: 5, Assists: 3 },
      { name: 'Player 2', position: 'Position 2', Points: 15, Rebounds: 8, Assists: 6 },
    ]);

    // Make a GET request to /api/player and check if the response is successful
    const response = await request.get('/api/player');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2); // Assuming there are 2 players in the database
  });

  // Add more test cases for other player routes if needed
});

describe('Team routes', () => {
  it('Should get all teams from the database', async () => {
    // Add some mock teams to the database
    await Team.bulkCreate([
      { name: 'Team 1', location: 'Location 1', wins: 5, losses: 3 },
      { name: 'Team 2', location: 'Location 2', wins: 8, losses: 1 },
    ]);

    // Make a GET request to /api/team and check if the response is successful
    const response = await request.get('/api/team');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2); // Assuming there are 2 teams in the database
  });

  // Add more test cases for other team routes if needed
});

// Add more test suites for other routes if needed
