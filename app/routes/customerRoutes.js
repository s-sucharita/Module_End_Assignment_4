const express = require('express');
const { createCustomer, getCustomers } = require('../controllers/customerController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createCustomer);
router.get('/', auth, getCustomers);

module.exports = router;
