const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: {
    email: { type: String },
    phone: { type: String },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String
    }
  },
  status: { type: String, enum: ['active', 'inactive', 'prospect', 'lost'], default: 'active' },
  notes: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
