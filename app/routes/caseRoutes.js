const express = require('express');
const {
	createCase,
	updateCase,
	getCases,
	getCase,
	deleteCase
} = require('../controllers/caseController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createCase);
router.get('/', auth, getCases);
router.get('/:id', auth, getCase);
router.patch('/:id', auth, updateCase);
router.delete('/:id', auth, deleteCase);

module.exports = router;
