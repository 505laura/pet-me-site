const request = require('supertest');
const __app = require('../app');
const sequelize = require('../config/connection');
const { Pet } = require('../models');
const {withoutDatabaseData} = require('./utils');
const {pets} = require('./fixtures/data');

const {pet1} = pets;

let app;

describe('Pet Routes', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
        app = request(__app);
    });

    afterAll(async() => {
        await sequelize.close();
    });

    test('gets all pets', async() => {
        const response1 = await app.get('/api/animals');
        expect(response1.statusCode).toBe(200);
        await Pet.create(pet1);
        const response2 = await app.get('/api/animals');
        expect(response2.statusCode).toBe(200);
        expect(response2.body.map(withoutDatabaseData)).toStrictEqual([...response1.body.map(withoutDatabaseData), pet1]);
    });
    test('get pet by id', async() => {
        const response = await app.get('/api/animals/1');
        expect(response.statusCode).toBe(200);
        expect(withoutDatabaseData(response.body)).toStrictEqual(pet1);
    });
    test('create pet', async() => {
        const response1 = await app.post('/api/animals').send(pet1);
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get(`/api/animals/${response1.body.pet_id}`);
        expect(response2.statusCode).toBe(200);
        expect(withoutDatabaseData(response2.body)).toStrictEqual(pet1);
    });
    test('update pet by id', async() => {
        const response1 = await app.put('/api/animals/1').send({
            description: 'Well behaved'
        });
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/animals/1');
        expect(response2.statusCode).toBe(200);
        const goodHunter = {...pet1, description: 'Well behaved'};
        expect(withoutDatabaseData(response2.body)).toStrictEqual(goodHunter);
    });
    test('delete pet', async() => {
        const response1 = await app.delete('/api/animals/1');
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/animals/1');
        expect(response2.statusCode).toBe(404);
    });
});




