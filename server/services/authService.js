const User = require('../models/User');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const config = require('../config/config');

const register = async (email, firstName, lastName, password, balance) => {
    const salt = await bcrypt.genSalt(config.SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
        email,
        firstName,
        lastName,
        password: hash,
        balance,
    });

    await admin.auth().createUser({
        uid: user._id.toString(),
        email,
        password,
    });

    await admin.auth().setCustomUserClaims(user._id.toString(), { user: true });
};

module.exports = {
    register,
};
