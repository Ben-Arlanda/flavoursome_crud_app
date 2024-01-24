require('dotenv').config()

const express = require('express')
const bcrypt = require('bcrypt')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 8080
const db = require('./db')

//need this for user session/userId
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)

// need this for body of email login 
app.use(express.urlencoded({ extended: true}))

//need this for user sessiion/userId
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

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


app.get('/restaurants/:id', (req, res) => {

    let id = req.params.id

    db.query(`select * from restaurants where id = ${id};`, (err, result) => {
      
        console.log(err);
        let restaurant = result.rows[0]

        db.query('SELECT * FROM reviews WHERE restaurantID = $1;', [id], (err, reviewResult) => {

            let reviews = reviewResult.rows;
            
            console.log(result.rows);
            
            res.render('restaurant_info', { restaurant, reviews });

        })

    })
})


app.delete('/reviews/:id', (req, res) => {

    console.log('hello');
const sql = `
DELETE FROM reviews
WHERE id = $1`;

db.query(sql, (err, result) => {
    if(err) {
        console.log(err)
    }

    res.redirect(`/restaurants/${restaurantID}`);
    })
})

app.post('/reviews/:id/reviews', (req, res) => {

  let restaurantID = req.params.id
  let email = req.body.email
  let description = req.body.description
  let rating = req.body.rating


  const sql = `INSERT INTO reviews (restaurantID, email, description, rating) values ('${restaurantID}', '${email}', '${description}', '${rating}');`

  db.query(sql, (err, result) => {
    if (err) {
      console.log()
    }

    res.redirect(`/restaurants/${restaurantID}`);
  })

})




app.get('/reviews/:id/edit', (req, res) => {

const sql = `

SELECT * FROM reviews
WHERE id = ${req.params.id};
`

db.query(sql, (err, result) => {
  if (err) {
    console.log(err);
  }

  let reviews = result.rows[0]
  res.redirect(`/restaurants/${restaurantID}`);
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