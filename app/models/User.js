const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: false },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'agent', 'manager'], default: 'agent' }
}, { timestamps: true });

userSchema.virtual('password')
  .set(function(password) {
    if (!password) return;
    const salt = bcrypt.genSaltSync(10);
    this.password_hash = bcrypt.hashSync(password, salt);
  });

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password_hash);
};

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password_hash;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
