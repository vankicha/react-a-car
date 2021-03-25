const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
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
    photoUrl: {
        type: String,
    },
    providedCars: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Car',
        },
    ],
    rating: [
        {
            _id: false,
            rated: Number,
            user: { type: mongoose.Types.ObjectId, ref: 'Car' },
        },
    ],
});

module.exports = mongoose.model('Company', companySchema);
