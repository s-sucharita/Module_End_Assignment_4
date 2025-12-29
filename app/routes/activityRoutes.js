const express = require('express');
const {
  createActivity,
  getActivities,
  getActivity,
  deleteActivity
} = require('../controllers/activityController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createActivity);
router.get('/', auth, getActivities);
router.get('/:id', auth, getActivity);
router.delete('/:id', auth, deleteActivity);

module.exports = router;
