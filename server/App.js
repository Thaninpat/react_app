const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const checkAuth = require('./middleware/check-auth');

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

// Used to log everything like GET, POST, etc requests
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// To make uploads folder publically available with '/api/videos' route
app.use('/api/videos', express.static('media/uploads'));

// Routes
app.use('/api/signIn', require('./routes/signIn'));
app.use('/api/signUp', require('./routes/signUp'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/videoList', checkAuth, require('./routes/videoList'));

module.exports = app;
