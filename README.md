# Node/Express/Postgres Full-stack CRUD Application

- I made a Restaurant Review app for my second project at GA.

The criteria was to make a password-protected, full-stack CRUD application that stores data in PostgreSQL in 2 days.

Login Details:

Username: test@email.com

Password: test

## :computer: [Click here]() to see the app!

![screenshot](/public/landing%20page.png)

## :page_facing_up: Features 

- Users can login for authetication. I used bycrypt to hash the password for added security. 

![screenshot](/public/login.png)

- Once logged in users can view popular restaurants based in Sydney. 

![screenshot](/public/Restaurants.png)

- Users can then view each resturant with their average ratings based on previous reviews. 

![screenshot](/public/reviews.png)

- Users can then post their reviews and delete if needed. 

![screenshot](/public/post%20a%20review.png)

## :pencil2: Planning & Wireframe

- I initially did a wireframe to get a visual idea of how i would mock up my HTML and how the interface would look to the user.

![screenshot](/public/wireframe.png)

- I then created a useful flow chart in Whimsical to help me set up the Schema tables and the user flow when using the app. Initially in our lessons we only set up 2 schema tables but I realised i needed to create 3 tables to enable users to post reviews. 

![screenshot](/public/flowchart.png)

## :rocket: Technologies used

- JavaScript, Node.js, Postgres, Express, EJS, CSS.

## Dependencies used 

- bcrypt https://github.com/kelektiv/node.bcrypt.js/
- dotenv https://www.npmjs.com/package/dotenv
- EJS https://ejs.co/
- Express https://expressjs.com/
- express ejs layouts https://github.com/soarez/express-ejs-layouts
- express-session https://www.npmjs.com/package/express-session
- method-override https://www.npmjs.com/package/method-override
- nodemon https://www.npmjs.com/package/nodemon
- pg https://node-postgres.com/

## :white_check_mark: Future updates

- Implement google maps API to show location.
