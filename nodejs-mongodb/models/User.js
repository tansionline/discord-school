const { Schema } = require('mongoose')
const db = require('../db')

const userSchema = db.Schema({
    username: String,
    password: String
  })
  
  const User = db.model('User', userSchema)
  
  module.exports = User