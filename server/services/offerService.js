const Offer = require('../models/Offer');
const moment = require('moment');

const create = async (brand, model, year, price, photoUrl, userId) => {
    const offer = await Offer.create({
        brand,
        model,
        year,
        pricePerHour: price,
        image: photoUrl,
        provider: userId,
    });

    return offer._id;
};

const getAll = async (limit, skip) => {
    const totalCount = await Offer.countDocuments();
    const offers = await Offer.find().skip(skip).limit(limit);

    return { offers, totalCount };
};

const getOne = async (offerId) => {
    return await Offer.findById(offerId).populate({
        path: 'provider',
        options: {
            select: { firstName: 1, lastName: 1, offers: 1, photoUrl: 1 },
        },
        populate: {
            path: 'offers',
            options: {
                select: { brand: 1, model: 1, pricePerHour: 1 },
                sort: { _id: -1 },
                limit: 5,
            },
        },
    });
};

const updateRentedDate = async (offerId, hours) => {
    const date = moment(new Date()).add(hours, 'hours');

    return await Offer.updateOne({ _id: offerId }, { lastRented: date });
};

const deleteOne = async (offerId) => {
    return await Offer.deleteOne({ _id: offerId });
};

const updateOne = async (offerId, brand, model, year, price, image) => {
    return await Offer.updateOne(
        { _id: offerId },
        { brand, model, year, pricePerHour: price, image }
    );
};

const addToReviewers = async (offerId, userId) => {
    return await Offer.updateOne(
        { _id: offerId },
        { $push: { reviewers: [userId] } }
    );
};

const removeFromReviewers = async (offerId, userId) => {
    return await Offer.updateOne(
        { _id: offerId },
        { $pull: { reviewers: userId } }
    );
};

module.exports = {
    create,
    getAll,
    getOne,
    updateRentedDate,
    deleteOne,
    updateOne,
    addToReviewers,
    removeFromReviewers,
};
