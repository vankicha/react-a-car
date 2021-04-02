const { Router } = require('express');
const userController = Router();
const userService = require('../services/userService');
const offerService = require('../services/offerService');
const { isAuthorized } = require('../middlewares/authenticate');

userController.get('/:userId', async (req, res) => {
    if (req.query.fields === 'offers') {
        const result = await userService.getUserOffers(req.params.userId);
        return res.status(200).json(result);
    } else if (req.query.fields === 'rentals') {
        const result = await userService.getUserRentals(req.params.userId);
        return res.status(200).json(result);
    }

    const userInfo = await userService.getUserInfo(
        req.params.userId,
        req.query.fields
    );

    res.status(200).json(userInfo);
});

userController.put('/:userId/rentals', isAuthorized, async (req, res) => {
    const userId = req.params.userId;
    const providerId = req.body.providerId;
    const offerId = req.body.offerId;
    const hours = Number(req.body.hours);
    const price = Number(req.body.price);

    await userService.updateUserRentals(userId, offerId);
    await offerService.updateRentedDate(offerId, hours);
    await userService.deposit(providerId, price);
    await userService.withdraw(userId, price);

    res.status(202).end();
});

userController.put('/:userId/photo', isAuthorized, async (req, res) => {
    const userId = req.params.userId;
    const photoUrl = req.body.photoUrl;

    await userService.updateUserPhoto(userId, photoUrl);

    res.status(200).json({ photoUrl });
});

userController.put('/:userId/balance', isAuthorized, async (req, res) => {
    const userId = req.params.userId;
    const amount = Number(req.body.amount);
    const password = req.body.password;

    if (req.query.action === 'deposit') {
        await userService.deposit(userId, amount, password);
    }

    res.status(202).end();
});

userController.delete('/:userId/offers/:offerId', async (req, res) => {
    const userId = req.params.userId;
    const offerId = req.params.offerId;

    await userService.removeOffer(userId, offerId);
    await offerService.deleteOne(offerId);

    res.status(204).end();
});

module.exports = userController;
