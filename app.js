const express = require('express');
const userMiddleWare = require('./middleware');
const useErrorHandlers = require("./middleware/error-handlers");

const indexRouter = require('./routes/index');

const app = express();
userMiddleWare(app);

app.use('/', indexRouter);

useErrorHandlers(app);

module.exports = app;
