const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/connection');
const { Pet } = require('../models');

const hunter = {species: 'Dog', name: 'Hunter', breed: 'Doberman', age: 3, colour: 'Black and tan', sex: 'Male', desexed: 'Y', description: 'Mischevious'};

describe('Pet Routes', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
        await Pet.create(hunter);
    });
    test('gets all pets', async() => {
        await request(app).get('/api/animals').then((response)=> {
            expect(response.statusCode).toBe(200);
        });
    });
    test('get pet by id', async() => {
        await request(app).get('/api/animals/1').then((response)=> {
            expect(response.statusCode).toBe(200);
            const {createdAt, deletedAt, id, updatedAt, ...animal} = response.body;
            expect(animal).toStrictEqual(hunter);
        });
    });
});




