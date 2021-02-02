const express = require('express');
const morgon = require('morgan');
const cors = require('cors');
const formRouter = require('./router/formRouter');

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgon('dev'));
}

app.use(express.json());

app.use('/api/v1/data/', formRouter)

module.exports = app;