require('dotenv').config()

const express = require('express')
const bcrypt = require('bcrypt')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT || 3000;
const db = require('./db')

//need this for user session/userId
const session = require('express-session')
const restaurantRouter = require('./controllers/restaurant_router')
const homeRouter = require('./controllers/home_router')
const sessionRouter = require('./controllers/session_router')
const reviewRouter = require('./controllers/review_router')

const setCurrentUser = require('./middlewares/set_current_user')
const ensureLoggedIn = require('./middlewares/ensure_logged_in')



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)
app.use(methodOverride('_method'))


// need this for body of email login 
app.use(express.urlencoded({ extended: true}))

//need this for user sessiion/userId
app.use(session({
  secret: process.env.SECRET || "mistyrose",
  resave: false,
  saveUninitialized: true
}))

app.use(setCurrentUser);
// app.use(ensureLoggedIn);

app.use(restaurantRouter)
app.use(homeRouter)
app.use(reviewRouter)
app.use(sessionRouter)



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})