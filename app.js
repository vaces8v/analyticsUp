'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const AnalyticRouter = require('./routes/analytics.route.js');
const AuthRouter = require('./routes/auth.route.js');
const CategoryRouter = require('./routes/category.route.js');
const OrderRouter = require('./routes/order.route.js');
const PositionRouter = require('./routes/position.route.js');

const app = express()

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')())

app.use('/api/analytics', AnalyticRouter)
app.use('/api/auth', AuthRouter)
app.use('/api/category', CategoryRouter)
app.use('/api/order', OrderRouter)
app.use('/api/position', PositionRouter)


app.get('/', (req, res) => {
    res.status(200).json({
        api: 'Go'
    })
})

module.exports = app