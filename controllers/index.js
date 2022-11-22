const router = require('express').Router();

const apiRoutes = require('./api');
const webRoutes = require('./web');
const portalRoutes = require('./portal');

router.use('/api', apiRoutes);
router.use('/portal', portalRoutes);
router.use('/', webRoutes);

router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>');
});


module.exports = router;
