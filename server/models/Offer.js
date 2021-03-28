const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    provider: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
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
module.exports = mongoose.model('Offer', offerSchema);
