const { Router } = require('express');
const authService = require('../services/authService');

const authController = Router();

authController.post('/register', async (req, res, next) => {
    const { email, firstName, lastName, password, balance } = req.body;

    try {
        await authService.register(
            email,
            firstName,
            lastName,
            password,
            Number(balance)
        );
        res.status(201).json({});
    } catch (err) {
        next(err);
    }
});

module.exports = authController;
