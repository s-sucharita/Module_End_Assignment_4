const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  type: { type: String, enum: ['note', 'email', 'call', 'status_change', 'assignment', 'system'], default: 'note' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  case: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  content: { type: String },
  metadata: { type: mongoose.Schema.Types.Mixed },
  attachments: [String]
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
