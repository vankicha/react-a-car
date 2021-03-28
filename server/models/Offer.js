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
        type: Date,
    },
});

offerSchema.virtual('isAvailable').get(function () {
    return this.lastRented > new Date().getDate();
});

module.exports = mongoose.model('Offer', offerSchema);