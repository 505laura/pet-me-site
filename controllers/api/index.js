const router = require('express').Router();
const petRoutes = require('./pets');
const appointmentRoutes = require('./appointments');
const employeeRoutes = require('./employees');
const reviewRoutes = require('./reviews');
const userRoutes = require('./users');

router.use('/pets', petRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
