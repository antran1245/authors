const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
require('./server/routes/author.routes')(app)