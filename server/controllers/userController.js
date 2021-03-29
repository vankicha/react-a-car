const { Router } = require('express');
const userController = Router();
const userService = require('../services/userService');

userController.get('/:userId', async (req, res) => {
    const userInfo = await userService.getUserInfo(
        req.params.userId,
        req.query.fields
    );

    res.status(200).json(userInfo);
});

module.exports = userController;
