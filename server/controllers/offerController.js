const { Router } = require('express');
const offerController = Router();
const { isAuthorized } = require('../middlewares/authenticate');
const offerService = require('../services/offerService');
const userService = require('../services/userService');

offerController.get('/', async (req, res) => {
    const page = Number(req.query.page);
    const limit = 6;
    const skip = limit * page - limit;
    const result = await offerService.getAll(limit, skip);

    res.status(200).json(result);
});

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

offerController.get('/:offerId', async (req, res) => {
    const offer = await offerService.getOne(req.params.offerId);

    res.status(200).json(offer);
});

offerController.put('/:offerId', isAuthorized, async (req, res) => {
    const { offerId } = req.params;
    const { brand, model, year, price, image } = req.body;

    await offerService.updateOne(
        offerId,
        brand,
        model,
        year,
        Number(price),
        image
    );

    res.status(202).end();
});

module.exports = offerController;
