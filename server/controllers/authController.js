const { Router } = require('express');
const authService = require('../services/authService');

const authController = Router();

authController.post('/register', async (req, res) => {
    if (req.query.as === 'company') {
        const { email, companyName, password } = req.body;
        await authService.registerCompany(email, companyName, password);
    } else if (req.query.as === 'user') {
        const { email, firstName, lastName, password, balance } = req.body;
        await authService.registerUser(
            email,
            firstName,
            lastName,
            password,
            Number(balance)
        );
    }

    res.status(201).end();
});

module.exports = authController;
