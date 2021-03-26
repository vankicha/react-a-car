const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

router.use('/auth', authController);
router.use('/users', userController);
router.all('*', (req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

module.exports = router;
