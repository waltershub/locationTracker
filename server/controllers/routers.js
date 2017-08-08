const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.post('/location', controllers.postLocation);

router.get('/locations', controllers.getDeviceLocations);

module.exports = router;
