const express = require('express');
const hellocontroller = require('../controllers/hellocontroller');

const router = express.Router();

router.get('/hello', hellocontroller.getHelloMessage);

module.exports = router;
