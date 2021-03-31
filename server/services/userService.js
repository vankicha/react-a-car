const User = require('../models/User');

const updateOffers = async (userId, offerId) => {
    await User.updateOne({ _id: userId }, { $push: { offers: [offerId] } });
};

const getUserInfo = async (userId, fields) => {
    return await User.findById(userId).select(fields.split(',').join(' '));
};

const updateUserRentals = async (userId, offerId) => {
    const user = await User.findById(userId);

    if (!user.rented.includes(offerId)) {
        await User.updateOne({ _id: userId }, { $push: { rented: [offerId] } });
    }
};

const withdraw = async (userId, price) => {
    return await User.updateOne({ _id: userId }, { $inc: { balance: -price } });
};

const deposit = async (userId, price) => {
    return await User.updateOne({ _id: userId }, { $inc: { balance: price } });
};

const updateUserPhoto = async (userId, photoUrl) => {
    return await User.updateOne({ _id: userId }, { photoUrl });
};

module.exports = {
    updateOffers,
    getUserInfo,
    updateUserRentals,
    withdraw,
    deposit,
    updateUserPhoto,
};
