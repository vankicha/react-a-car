const { Router } = require('express');
const offerController = Router();
const { isAuthorized } = require('../middlewares/authenticate');
const offerService = require('../services/offerService');
const userService = require('../services/userService');

offerController.post('/', isAuthorized, async (req, res) => {
    const { brand, model, year, price, photoUrl } = req.body;
    const { user_id: userId } = req.user;

    const offerId = await offerService.create(
        brand,
        model,
        year,
        Number(price),
        photoUrl,
        userId
    );
    await userService.updateOffers(userId, offerId);

    res.status(201).json({ offerId });
});

module.exports = offerController;
