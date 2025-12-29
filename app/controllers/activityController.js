const Activity = require('../models/Activity');

exports.createActivity = async (req, res) => {
  try {
    const act = await Activity.create(req.body);
    res.json(act);
  } catch (err) {
    res.status(500).json({ message: 'Create activity failed', error: err.message });
  }
};

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().populate('user case customer');
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Fetch activities failed', error: err.message });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const act = await Activity.findById(req.params.id).populate('user case customer');
    if (!act) return res.status(404).json({ message: 'Activity not found' });
    res.json(act);
  } catch (err) {
    res.status(500).json({ message: 'Fetch activity failed', error: err.message });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    const removed = await Activity.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Activity not found' });
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete activity failed', error: err.message });
  }
};
