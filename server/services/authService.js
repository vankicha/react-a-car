const User = require('../models/User');
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const config = require('../config/config');

const registerCompany = async (email, companyName, password) => {
    const salt = await bcrypt.genSalt(config.SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const company = await Company.create({
        email,
        name: companyName,
        password: hash,
    });

    await admin.auth().createUser({
        uid: company._id.toString(),
        email,
        password,
    });

    await admin
        .auth()
        .setCustomUserClaims(company._id.toString(), { company: true });

    return { _id: company._id, fullName: company.name, email: company.email };
};

const registerUser = async (email, firstName, lastName, password, balance) => {
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

    return {
        _id: user._id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        balance: user.balance,
    };
};

module.exports = {
    registerCompany,
    registerUser,
};
