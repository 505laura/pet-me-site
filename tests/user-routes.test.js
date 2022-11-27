const request = require('supertest');
var session = require('supertest-session');
const __app = require('../app');
const sequelize = require('../config/connection');
const {users} = require('./fixtures/data');
const {withoutDatabaseData} = require('./utils');

const {user1, userWithoutPass} = users;

let app;

var testSession = null;

describe('User Routes', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
        testSession = session(__app);
        app = request(__app);
    });

    afterAll(async() => {
        await sequelize.close();
    });

    test('create user', async() => {
        const response1 = await testSession.post('/api/users').send(user1);
        expect(response1.statusCode).toBe(200);
        // const loginRes = await testSession.post('/api/users/login', user1);
        const response2 = await testSession.get(`/api/users/${response1.body.user_id}`);
        expect(response2.statusCode).toBe(200);
        expect(withoutDatabaseData(response2.body)).toStrictEqual(userWithoutPass);
    });


    // test('Fails to login', async() => {
    //     await app.post('/api/users').send({...user1, email: 'some@other.com'});
    //     await app.post('/api/users/login').send(user1);
    // });


    test('get user by id', async() => {
        const response = await app.get('/api/users/1');
        expect(response.statusCode).toBe(200);
        expect(withoutDatabaseData(response.body)).toStrictEqual(userWithoutPass);
    });
    test('update user by id', async() => {
        const response1 = await app.put('/api/users/1').send({
            gender: 'Male'
        });
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/users/1');
        expect(response2.statusCode).toBe(200);
        const updatedUser = {...userWithoutPass, gender: 'Male'};
        expect(withoutDatabaseData(response2.body)).toStrictEqual(updatedUser);
    });
    test('delete user', async() => {
        const response1 = await app.delete('/api/users/1');
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/users/1');
        expect(response2.statusCode).toBe(404);
    });
});