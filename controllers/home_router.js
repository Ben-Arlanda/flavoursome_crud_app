const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/', (req, res) => {
        res.render('landing_page')
    })


module.exports = router
