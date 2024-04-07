'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelize, Country } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await Country.create({
    name: 'Testland',
    population: 1000000,
    HDI: 0.9,
    nativeLanguage: 'English',
  });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Express Server', () => {
  test('Should return a 404 for an invalid route', async () => {
    let response = await request.get('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  }); 
  
  test('Should return a 404 for an bad method', async () => {
    let response = await request.post('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  });

  xtest('Should return a 500 when no id is provided', async () => {
    let response = await request.delete('/api/country/');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Server Error.');
  });

  //CREATE 1
  test('Should create a country in the database and respond with status 200', async () => {
    const newCountry = {
      name: 'Wonderland',
      population: 1500000,
      HDI: 0.95,
      nativeLanguage: 'Wonderish',
    };
    let response = await request.post('/api/country').send(newCountry);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe(newCountry.name);
  });

  // GET ALL
  test('Should read all countries in the database and respond with status 200', async () => {
    let response = await request.get('/api/country');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Testland');
  });

  //GET 1
  test('Should read one country in the database and return it with a status 200', async () => {
    let response = await request.get('/api/country/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Testland');
  });

  test('Should read one country in the database and return it with a status 200', async () => {
    let response = await request.put('/api/country/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Testland');
  });

  test('Should delete one country in the database and return the now empty object with a status of 200', async () => {
    let response = await request.delete('/api/country/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });
});


//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test2');
//   });
// })
