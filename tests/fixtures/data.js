const pet1 = {species: 'Dog', name: 'Hunter', breed: 'Doberman', age: 3, colour: 'Black and tan', sex: 'Male', desexed: 'Y', description: 'Mischevious'};

const userWithoutPass = {email: 'user1@gmail.com', firstName: 'Bob', lastName: 'Duncan', gender: 'None', telephone: 12345678};
const user1 = {password: 'passworduser1', ...userWithoutPass};

const employeeWithoutPass = {email: 'employee1@gmail.com', firstName: 'Jess', lastName: 'Williams', gender: 'Female', telephone: 11001100};
const employee1 = {password: 'passwordemployee1', ...employeeWithoutPass};

const appointment1 = {date: '2022-11-27T20:00:00.000Z', pet_id: -1, user_id: -1};
const newAppointment = {date: '2022-12-05T20:00:00.000Z'};

module.exports.pets = {pet1};
module.exports.users = {user1, userWithoutPass};
module.exports.employees = {employee1, employeeWithoutPass};
module.exports.appointments = {appointment1, newAppointment};