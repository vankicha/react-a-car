const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    image: {
        type: String,
    },
    provider: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        ref: 'Organization',
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    lastRented: {
        date: Date,
        id: { type: mongoose.Types.ObjectId, ref: 'User' },
    },
});

module.exports = mongoose.model('Car', carSchema);
