const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscription: {
        plan: { type: String, enum: ['free', 'basic', 'premium'], default: 'free' },
        status: { type: String, enum: ['active', 'inactive', 'cancelled'], default: 'inactive' },
        stripeCustomerId: { type: String },
        endsAt: { type: Date }
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);