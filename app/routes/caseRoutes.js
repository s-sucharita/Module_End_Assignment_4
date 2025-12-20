const express = require('express');
const { createCase, updateCase } = require('../controllers/caseController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createCase);
router.patch('/:id', auth, updateCase);

module.exports = router;
