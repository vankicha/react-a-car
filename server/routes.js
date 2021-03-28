const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const offerController = require('./controllers/offerController');

router.use('/auth', authController);
router.use('/users', userController);
router.use('/offers', offerController);
router.all('*', (req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

module.exports = router;
