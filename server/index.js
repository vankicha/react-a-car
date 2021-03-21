const express = require('express');
const config = require('./config/config');
const routes = require('./routes');

const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);

app.use('/api', routes);

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}...`));
