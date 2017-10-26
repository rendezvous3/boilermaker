const crypto = require('crypto')
const _ = require('lodash')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING,
  }
})

module.exports = User

// instance methods
User.prototype.correctPassword = function(candidatePwd){
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

// class methods
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt){
  return crypto.createHash('RSA-SHA256').update(plainText).update(salt).digest('hex')
}

const seaSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)


