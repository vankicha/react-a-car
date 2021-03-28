const admin = require('firebase-admin');

async function authenticate(req, res, next) {
    if (req.get('Authorization')) {
        const idToken =
            req.get('Authorization').split(' ')[1] || req.get('Authorization');
        try {
            const verifiedToken = await admin.auth().verifyIdToken(idToken);
            req.user = verifiedToken;
        } catch (error) {
            res.status(404).send({ error: 'Invalid token' });
            return;
        }
    }
    next();
}

const isAuthorized = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({
            error: 'You are not authorized to make this request',
        });
        return;
    }

    next();
};

module.exports = {
    authenticate,
    isAuthorized,
};
