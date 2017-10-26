const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const db = require('./db')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({ db })
const PORT = process.env.PORT || 8080
const app = express()
//const socketio = require('socket.io')
module.exports = app

// passport registration
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '..', 'public')))

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// sync so that our session table gets created
sessionStore.sync()

// session middleware with passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'my best friend is Ambal',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.log(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


db.sync()
  .then(()=>{
    // node server
    app.listen(PORT, ()=>{
      console.log(`Server listening on port ${PORT}`)
    })
  })





