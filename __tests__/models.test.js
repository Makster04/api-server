'use strict';
const { sequelize, Country } = require('../../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

describe('Country Model', () => {
  it('Should create a country row', async () => {
    const testCountry = await Country.create({
      name: 'Testland',
      population: 1000000,
      HDI: 0.9,
      nativeLanguage: 'English',
    });

    expect(testCountry.name).toEqual('Testland');
    expect(testCountry.population).toEqual(1000000);
    expect(testCountry.HDI).toEqual(0.9);
    expect(testCountry.nativeLanguage).toEqual('English');
  });

  it('Should read a country from the table', async () => {});
});
