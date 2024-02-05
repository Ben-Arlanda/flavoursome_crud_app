const express = require('express')
const router = express.Router()
const db = require('../db')
const ensureLoggedIn = require('../middlewares/ensure_logged_in')


router.get('/restaurants', ensureLoggedIn, (req, res) => {
      db.query('SELECT * FROM restaurants ORDER BY id ASC;', (err, result) => {
        if (err) {
            console.log(err);
        }
        let restaurant = result.rows
        res.render('restaurants', { restaurants: restaurant})
        console.log(result.rows);
    })
})


router.get('/restaurants/:id', (req, res) => {

    let id = req.params.id

    db.query(`select * from restaurants where id = ${id};`, (err, result) => {
      
        console.log(err);
        let restaurant = result.rows[0]

        db.query('SELECT * FROM reviews WHERE restaurantID = $1;', [id], (err, reviewResult) => {

            let reviews = reviewResult.rows;

            let totalRating = 0;
            for (const review of reviews) {
            totalRating += review.rating;
        }
            const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
            
            console.log(result.rows);
            
            res.render('restaurant_info', { restaurant, reviews, averageRating });

        })

    })
})


module.exports = router