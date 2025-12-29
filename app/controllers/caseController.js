const CaseModel = require('../models/Case');

exports.createCase = async (req, res) => {
  try {
    const newCase = await CaseModel.create(req.body);
    res.json(newCase);
  } catch (err) {
    res.status(500).json({ message: 'Create case failed', error: err.message });
  }
};

exports.updateCase = async (req, res) => {
  try {
    const updated = await CaseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Case not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Update case failed', error: err.message });
  }
};

exports.getCases = async (req, res) => {
  try {
    const cases = await CaseModel.find().populate('customer assigned_to');
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: 'Fetch cases failed', error: err.message });
  }
};

exports.getCase = async (req, res) => {
  try {
    const found = await CaseModel.findById(req.params.id).populate('customer assigned_to');
    if (!found) return res.status(404).json({ message: 'Case not found' });
    res.json(found);
  } catch (err) {
    res.status(500).json({ message: 'Fetch case failed', error: err.message });
  }
};

exports.deleteCase = async (req, res) => {
  try {
    const removed = await CaseModel.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Case not found' });
    res.json({ message: 'Case deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete case failed', error: err.message });
  }
};
