const User = require('../models/User');
const bcrypt = require('bcrypt');

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

const deposit = async (userId, price, password) => {
    const user = await User.findById(userId);

    if (password) {
        const comparedPassword = await bcrypt.compare(password, user.password);

        if (!comparedPassword) {
            throw { message: 'Wrong password' };
        }
    }

    return await User.updateOne({ _id: userId }, { $inc: { balance: price } });
};

const updateUserPhoto = async (userId, photoUrl) => {
    return await User.updateOne({ _id: userId }, { photoUrl });
};

const getUserOffers = async (userId) => {
    return await User.findById(userId)
        .select('offers')
        .populate({
            path: 'offers',
            options: {
                select: { brand: 1, model: 1, image: 1 },
            },
        });
};

const removeOffer = async (userId, offerId) => {
    console.log(userId, offerId);
    return await User.updateOne(
        { _id: userId },
        { $pull: { offers: offerId } }
    );
};

const getUserRentals = async (userId) => {
    return await User.findById(userId)
        .select('rented')
        .populate({
            path: 'rented',
            options: {
                select: { brand: 1, model: 1, image: 1 },
            },
        });
};

module.exports = {
    updateOffers,
    getUserInfo,
    updateUserRentals,
    withdraw,
    deposit,
    updateUserPhoto,
    getUserOffers,
    removeOffer,
    getUserRentals,
};
