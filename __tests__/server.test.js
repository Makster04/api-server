'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize, Player } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await Player.create({
    name: 'jokic',
    points: 23,
    rebounds: 14,
    assists: 9,
  });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Express Server', () => {
  test('Should return a 404 for an invalid route', async () => {
    let response = await request.get('/player');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  }); 
  
  test('Should return a 404 for an bad method', async () => {
    let response = await request.post('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  });

  xtest('Should return a 500 when no id is provided', async () => {
    let response = await request.delete('/api/player/');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Server Error.');
  });

  //CREATE 1
  test('Should create a player in the database and respond with status 200', async () => {
    const newPlayer = {
      name: 'doncic',
      points: 33,
      rebounds: 6,
      assists: 11,
    };
    let response = await request.post('/api/player').send(newPlayer);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe(newPlayer.name);
  });

  // GET ALL
  test('Should read all players in the database and respond with status 200', async () => {
    let response = await request.get('/api/player');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('jokic');
  });

  //GET 1
  test('Should read one person in the database and return it with a status 200', async () => {
    let response = await request.get('/api/player/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('jokic');

  });

  test('Should read one person in the database and return it with a status 200', async () => {
    let response = await request.put('/api/player/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('jokic');

  });

  test('Should delete one person in the database and return the now empty object with a status of 200', async () => {
    let response = await request.delete('/api/player/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

});