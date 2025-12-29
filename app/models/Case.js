const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['open', 'in_progress', 'on_hold', 'closed'], default: 'open' },
}, { timestamps: true });

module.exports = mongoose.model('Case', caseSchema);
