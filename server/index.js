const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
//const SequelizeStore = require('connect-session-sequelize')(session.Store)
//const db = require('./db')
//const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
//const socketio = require('socket.io')
module.exports = app

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '..', 'public')))

// Any routes or other various middlewares should go here!


// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// node server
app.listen(3001, ()=>{
  console.log("server running on port 3001!")
})




