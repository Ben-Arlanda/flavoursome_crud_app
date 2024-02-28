const express = require('express')
const router = express.Router()
const db = require('../db')
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {

  res.render('login')
})

router.post('/login', (req, res) => {
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

router.delete('/logout', (req, res) => {
  req.session.userId = null; 
  res.redirect('/');
});


module.exports = router