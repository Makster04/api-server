// The error TypeError: Router.use() requires a middleware function but got an Object typically occurs when you're attempting to use an object where Express expects a middleware function.

// In your case, it seems like you're trying to use playerRoutes and teamRoutes as middleware, but they're likely objects containing routes rather than middleware functions.

// Ensure that playerRoutes and teamRoutes are instances of Express Routers or middleware functions, not plain objects. You should define these routes using express.Router() and then use them as middleware in your application.

// Here's how you can define your routes using Express Router and then use them as middleware:

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize, Player, Team } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Player routes', () => {
  it('Should get all players from the database', async () => {
    await Player.create({ name: 'Player 1', position: 'Position 1', points: 10, rebounds: 5, assists: 3 });
    await Player.create({ name: 'Player 2', position: 'Position 2', points: 15, rebounds: 8, assists: 6 });

    const response = await request.get('/api/player');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});

describe('Team routes', () => {
  it('Should get all teams from the database', async () => {
    await Team.create({ name: 'Team 1', location: 'Location 1', wins: 5, losses: 3 });
    await Team.create({ name: 'Team 2', location: 'Location 2', wins: 8, losses: 1 });

    const response = await request.get('/api/team');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});



// const { app } = require('../src/server');
// const supertest = require('supertest');
// const { sequelize, Pokemon } = require('../src/models');

// const request = supertest(app);

// beforeAll(async () => {
//   await sequelize.sync();
//   await Pokemon.create({
//     name: 'test',
//     type: 'test',
//     attackPoints: 0,
//     healthPoints:0
//   });
// });
// afterAll(async () => {
//   await sequelize.drop();
// });

// describe('Express Server', () => {
//   it('Should read all pokemon in the database and respond with status 200', async () => {
//     let response = await request.get('/api/pokemon');
//     expect(response.status).toEqual(200);
//     expect(response.body.length > 0).toBeTruthy();
//   });
//   it('Should create a new Pokemon and return a status 200', async () => {
//     let response = await request.post('/api/pokemon').send({
//       name: 'test2',
//       type: 'test2',
//       healthPoints: 10,
//       attackPoints: 10,
//     });

//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test2');
//   });
// })
