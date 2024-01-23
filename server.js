require('dotenv').config()

const express = require('express')
const bcrypt = require('bcrypt')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 8080
const db = require('./db')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)


// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: true
// }))

app.get('/', (req, res) => {
        res.render('landing_page')
    })


app.get('/restaurants', (req, res) => {
      db.query('SELECT * FROM restaurants ORDER BY id ASC;', (err, result) => {
        if (err) {
            console.log(err);
        }
        let restaurant = result.rows
        res.render('restaurants', { restaurants: restaurant})
        console.log(result.rows);
    })
})

app.get('/restaurants/new', (req, res) => {
    res.render('new_restaurant_form')
})


app.get('/restaurants/:id', (req, res) => {

    let id = req.params.id

    db.query(`select * from restaurants where id = ${id};`, (err, result) => {
      
    let restaurant = result.rows[0]
    console.log(result.rows);
    
    res.render('restaurant_info', {restaurant: restaurant})

    })

})


app.post('/restaurants', (req, res) => {

  let name = req.body.name
  let imageUrl1 = req.body.image_url1
  let imageUrl2 = req.body.image_url2
  let description = req.body.description
  let location = req.body.location

  const sql = `INSERT INTO planets (name, image_url1, image_url2, description, location) values ('${name}', '${imageUrl1}', '${imageUrl2}', '${description}''${location}');`

  db.query(sql, (err, result) => {
    if (err) {
      console.log()
    }

    ///res.send('success!!!!') // we are lying to our clients

    res.redirect('/restaurants')
  })

})


app.get('/login', (req, res) => {

  res.render('login')
})

app.post('/login', (req, res) => {
console.log(req.body);

const sql = `
SELECT * FROM users 
WHERE email = '${req.body.email}';
`

db.query(sql, (err, result) => {
  if (err) {
    console.log(err);
    res.render('login')
    return
  }

if (result.rows.length === 0) {
  console.log('user not found');
  res.render('login')
  return 
}

const plainTextPass = req.body.password
const hashedPass = result.rows[0].password_digest

bcrypt.compare(plainTextPass, hashedPass, (err, isCorrect) => {

  if (!isCorrect) {
    console.log('password does not match');
    res.render('login')
    return
  }


  req.session.userId = result.rows[0].id
  res.redirect('/')
    
    })
  })
})


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})