const express = require('express');
const {
	createCustomer,
	getCustomers,
	getCustomer,
	updateCustomer,
	deleteCustomer
} = require('../controllers/customerController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createCustomer);
router.get('/', auth, getCustomers);
router.get('/:id', auth, getCustomer);
router.patch('/:id', auth, updateCustomer);
router.delete('/:id', auth, deleteCustomer);

module.exports = router;
