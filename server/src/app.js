const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const tokenRouter = require('./routes/tokenRouter')
const authRouter = require('./routes/authRouter')
const categoryRouter = require('./routes/categoryRouter')
const questionRouter = require('./routes/questionRouter')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/token', tokenRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/questions', questionRouter);

module.exports = app;
