const mongoose = require('mongoose')
const mongo_uri = process.env.DB_MONGOURI || 'mongodb://localhost:27017/bugra' 

mongoose.connect(mongo_uri, {useNewUrlParser: true});

module.exports = mongoose