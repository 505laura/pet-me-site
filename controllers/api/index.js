const router = require('express').Router();
const animalRoutes = require('./animals');
const appointmentRoutes = require('./appointments');
const employeeRoutes = require('./employees');
const userRoutes = require('./users');

router.use('/animals', animalRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/users', userRoutes);

module.exports = router;
