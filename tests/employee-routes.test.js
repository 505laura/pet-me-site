const request = require('supertest');
var session = require('supertest-session');
const app = require('../app');
const sequelize = require('../config/connection');
const { employees } = require('./fixtures/data');
const {withoutDatabaseData} = require('./utils');

const {employee1, employeeWithoutPass} = employees;

var testSession = null;

describe('Employee Routes', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
        testSession = session(app);
    });

    afterAll(async() => {
        await sequelize.close();
    });

    test('create employee', async() => {
        const response1 = await testSession.post('/api/employees').send(employee1);
        expect(response1.statusCode).toBe(200);
        // const loginRes = await testSession.post('/api/employees/login', employee1);
        const response2 = await testSession.get(`/api/employees/${response1.body.employee_id}`);
        expect(response2.statusCode).toBe(200);
        expect(withoutDatabaseData(response2.body)).toStrictEqual(employeeWithoutPass);
    });
    test('get employee by id', async() => {
        const response = await request(app).get('/api/employees/1');
        expect(response.statusCode).toBe(200);
        expect(withoutDatabaseData(response.body)).toStrictEqual(employeeWithoutPass);
    });
    test('update employee by id', async() => {
        const response1 = await request(app).put('/api/employees/1').send({
            gender: 'Other'
        });
        expect(response1.statusCode).toBe(200);
        const response2 = await request(app).get('/api/employees/1');
        expect(response2.statusCode).toBe(200);
        const updatedEmployee = {...employeeWithoutPass, gender: 'Other'};
        expect(withoutDatabaseData(response2.body)).toStrictEqual(updatedEmployee);
    });
    test('delete employee', async() => {
        const response1 = await request(app).delete('/api/employees/1');
        expect(response1.statusCode).toBe(200);
        const response2 = await request(app).get('/api/employees/1');
        expect(response2.statusCode).toBe(404);
    });
});