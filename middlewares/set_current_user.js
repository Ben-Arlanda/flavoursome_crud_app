const db = require('../db')

function setCurrentUser(req, res, next) {
    res.locals.currentUser = null

   
     // if user is not logged in
    if(!req.session.userId) {
        return next()
    }

    // set current user
    const sql = `
        SELECT * FROM users WHERE id = $1;
    `
    db.query(sql, [req.session.userId], (err, result) => {
        res.locals.currentUser = result.rows[0]
        next()
    })
}

module.exports = setCurrentUser