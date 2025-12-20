const Case = require('../models/Case');

exports.createCase = async (req, res) => {
  const newCase = await Case.create(req.body);
  res.json(newCase);
};

exports.updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
