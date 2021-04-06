const express = require('express');
const config = require('./config/config');
const routes = require('./routes');
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://react-a-car-default-rtdb.firebaseio.com',
});

require('./config/express')(app);
require('./config/mongoose')(app);

app.use('/api', routes);
app.use(errorHandler);

app.listen(config.PORT, () =>
    console.log(`Listening on port ${config.PORT}...`)
);
