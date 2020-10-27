const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//console.log(dotenv.parsed);

mongoose.connect(process.env.URL_MONGODB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB is connected')
}).catch(err => console.log(err.message));
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/signIn', require('./routes/signIn'));
app.use('/api/signUp', require('./routes/signUp'));

module.exports = app;
