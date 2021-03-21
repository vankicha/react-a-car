const { Router } = require('express');
const userController = Router();

userController.get('/:userId', (req, res) => {
    res.status(200).json();
});

module.exports = userController;
