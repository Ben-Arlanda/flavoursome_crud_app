const express = require('express')
const router = express.Router()
const db = require('../db')
const ensureLoggedIn = require('../middlewares/ensure_logged_in')

router.delete('/reviews/:id', (req, res) => {

let restaurantID = req.body.restaurantId
console.log(restaurantID);

const sql = `
DELETE FROM reviews
WHERE id = $1`;

db.query(sql, [req.params.id], (err, result) => {
    if(err) {
        console.log(err)
    }

    res.redirect(`/restaurants/${restaurantID}`);
    })
})

router.post('/reviews/:id/reviews', (req, res) => {

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


router.get('/reviews/:id/edit', (req, res) => {

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

module.exports = router