const request = require('supertest');
const __app = require('../app');
const sequelize = require('../config/connection');
const { Appointment, Pet, User } = require('../models');
const {pets, users} = require('./fixtures/data');
const {withoutDatabaseData} = require('./utils');
const {appointments} = require('./fixtures/data');

const {appointment1} = appointments;

let app;

const fullAppointment = (id) => id ? ({
    ...appointment1, id,
    user: {...users.userWithoutPass, id: appointment1.user_id},
    pet: {...pets.pet1, id: appointment1.pet_id},
}) : ({
    ...appointment1,
    user: {...users.userWithoutPass, id: appointment1.user_id},
    pet: {...pets.pet1, id: appointment1.pet_id},
});

describe('Appointment Routes', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
        const pet = await Pet.create(pets.pet1);
        const user = await User.create(users.user1);
        appointment1.pet_id = pet.getDataValue('id');
        appointment1.user_id = user.getDataValue('id');
        app = request(__app);
    });

    afterAll(async() => {
        await sequelize.close();
    });

    test('create appointment', async() => {
        const response1 = await app.post('/api/appointments').send(appointment1);
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get(`/api/appointments/${response1.body.appointment_id}`);
        expect(response2.statusCode).toBe(200);
        expect(response2.body).toStrictEqual(fullAppointment(response1.body.appointment_id));
    });
    test('gets all appointments', async() => {
        const response1 = await app.get('/api/appointments');
        expect(response1.statusCode).toBe(200);
        const appt = await Appointment.create(appointment1);
        const response2 = await app.get('/api/appointments');
        expect(response2.statusCode).toBe(200);
        expect(response2.body).toStrictEqual([...response1.body, fullAppointment(appt.getDataValue('id'))]);
    });
    test('get appointment by id', async() => {
        const response = await app.get('/api/appointments/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(fullAppointment(1));
    });
    test('update appointment by id', async() => {
        const response1 = await app.put('/api/appointments/1').send({
            date: appointments.newAppointment.date
        });
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/appointments/1');
        expect(response2.statusCode).toBe(200);
        const newAppointment = {...fullAppointment(), ...appointments.newAppointment};
        expect(withoutDatabaseData(response2.body)).toStrictEqual(newAppointment);
    });
    test('delete appointment', async() => {
        const response1 = await app.delete('/api/appointments/1');
        expect(response1.statusCode).toBe(200);
        const response2 = await app.get('/api/appointments/1');
        expect(response2.statusCode).toBe(404);
    });
});