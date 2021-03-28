const Offer = require('../models/Offer');

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

const getAll = async () => {
    return await Offer.find();
};

module.exports = {
    create,
    getAll,
};
