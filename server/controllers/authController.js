const { Router } = require('express');
const authService = require('../services/authService');

const authController = Router();

authController.post('/register', async (req, res) => {
    let result = {};

    if (req.query.as === 'company') {
        const { email, companyName, password } = req.body;
        result = await authService.registerCompany(email, companyName, password);
    } else if (req.query.as === 'user') {
        const { email, firstName, lastName, password, balance } = req.body;
        result = await authService.registerUser(
            email,
            firstName,
            lastName,
            password,
            Number(balance)
        );
    }
    
    res.status(201).json(result);
});

module.exports = authController;
