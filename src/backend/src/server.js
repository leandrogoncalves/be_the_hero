'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Constants
const PORT = 80;
const HOST = 'localhost';

// App
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, HOST);