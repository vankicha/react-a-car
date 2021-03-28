const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    photoUrl: {
        type: String,
    },
    offers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Offer',
        },
    ],
    rented: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Offer',
        },
    ],
    review: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Offer',
        },
    ],
});

module.exports = mongoose.model('User', userSchema);
