const User = require('../models/User');

const updateOffers = async (userId, offerId) => {
    await User.updateOne({ _id: userId }, { $push: { offers: [offerId] } });
};

module.exports = {
    updateOffers,
};
