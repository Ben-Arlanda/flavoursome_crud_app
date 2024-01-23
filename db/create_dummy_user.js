require('dotenv').config()

const bcrypt = require('bcrypt')
const db = require('./index.js')

const email = 'test@email.com'
const plaintextPass = 'test'
const saltRound = 10

bcrypt.genSalt(saltRound, (err, salt) => {

    bcrypt.hash(plaintextPass, salt, (err, hashedPass) => {

        const sql = `
            INSERT INTO users 
            (email, password_digest)
            VALUES 
            ('${email}', '${hashedPass}')
            RETURNING id;
            `

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
            console.log('user created!');
            console.log(result.rows);

            }
            
        })


    })

})