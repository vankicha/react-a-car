const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    providedCar: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
    },
    rentedCars: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Car',
        },
    ],
    review: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Car',
        },
    ],
});

module.exports = mongoose.model('User', userSchema);
