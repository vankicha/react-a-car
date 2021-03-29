const User = require('../models/User');

const updateOffers = async (userId, offerId) => {
    await User.updateOne({ _id: userId }, { $push: { offers: [offerId] } });
};

const getUserInfo = async (userId, fields) => {
    return await User.findById(userId).select(fields.split(',').join(' '));
};

module.exports = {
    updateOffers,
    getUserInfo,
};
