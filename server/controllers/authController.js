const { Router } = require('express');
const authService = require('../services/authService');

const authController = Router();

authController.post('/register', async (req, res) => {
    const { email, firstName, lastName, password, balance } = req.body;
    await authService.register(
        email,
        firstName,
        lastName,
        password,
        Number(balance)
    );

    res.status(201).end();
});

module.exports = authController;
