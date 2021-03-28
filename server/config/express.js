const express = require('express');
const cors = require('cors');
const { authenticate } = require('../middlewares/authenticate');

function setupExpress(app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(authenticate);
}

module.exports = setupExpress;
