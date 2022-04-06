const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.event = require('./event.js')(mongoose);
db.user = require('./user.js')(mongoose);
db.admin = require('./admin-user')(mongoose);

module.exports = db;