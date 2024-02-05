CREATE DATABASE flavoursome_app;

\c planets_app

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url1 TEXT,
    image_url2 TEXT,
    description TEXT,
    location TEXT
);

INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Nomad',
    'https://content.api.news/v3/images/bin/4ff67b2e3da2b033df2760f84a13066b',
    'https://res.cloudinary.com/tf-lab/image/upload/restaurant/19f87c73-44f5-43f3-9f8d-9a58d1a56710/46aee940-4064-4e84-b931-d82160d9e89f.jpg',
    'We source the best produce from local growers who share that same belief. Our food is inspired by our travels through Spain, Morocco, and the Middle East and cooked with fire and smoke.',
    'Sydney, Surry Hills'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Quay',
    'https://img.delicious.com.au/1WpwRRCH/del/2016/11/quay-38936-1.jpg',
    'https://media.cntraveler.com/photos/53db21e6dcd5888e145e710b/master/pass/australia-travel-food-wine-12.jpg',
    'Renowned for its stunning views and contemporary Australian cuisine, Quay offers a unique dining experience by the Sydney Opera House.',
    'Sydney, The Rocks'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Tetsuya’s',
    'https://cdn.concreteplayground.com/content/uploads/2014/03/Tetsuyas_Image2-1920x1440.jpg',
    'https://danielfooddiary.com/wp-content/uploads/2014/06/tetsuya4.jpg',
    'A fine dining establishment, Tetsuya’s is known for its Japanese-French fusion cuisine and exquisite tasting menus.',
    'Sydney, CBD'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Rockpool Bar & Grill',
    'https://cdn.concreteplayground.com/content/uploads/2013/01/Rockpool-Sydney-4-1920x1440.jpg',
    'https://cdn.galaxy.tf/uploads/2s/cms_image/001/600/065/1600065050_5f5f0e1a6d542-thumb.jpg',
    'Famous for its premium steaks and seafood, Rockpool Bar & Grill is a sophisticated dining spot in the heart of Sydney.',
    'Sydney, CBD'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Bennelong',
    'https://media-cdn.tripadvisor.com/media/photo-s/0b/f9/55/83/photo-by-brett-stevens.jpg',
    'https://imgix.theurbanlist.com/content/article/Bennelong-Restaurant-Sydney-Opera-House.jpg',
    'Situated in the iconic Sydney Opera House, Bennelong offers modern Australian cuisine in a stylish and elegant setting.',
    'Sydney, Circular Quay'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Momofuku Seiobo',
    'https://img.delicious.com.au/LHeGXUl3/w759-h506-cfill/del/2015/10/momofoku-seiobo-21012-2.jpg',
    'https://media.cntraveler.com/photos/5a86f6b886e4b63c297d4860/16:9/w_2560,c_limit/Momofuko-Seiobo_Alan-Richardson_2018_pork-+-sides.jpg',
    'A part of the renowned Momofuku group, Momofuku Seiobo showcases innovative and eclectic dishes in a vibrant atmosphere.',
    'Sydney, Pyrmont'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Icebergs Dining Room and Bar',
    'https://mediaim.expedia.com/destination/2/acd20a3c83d0027ca994145e556e811a.jpg',
    'https://cdn.broadsheet.com.au/cache/4e/e7/4ee77d0844e5fc899f14c498ff6e3f34.jpg',
    'Perched above Bondi Beach, Icebergs offers modern Italian cuisine with breathtaking ocean views.',
    'Sydney, Bondi Beach'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'The Grounds of Alexandria',
    'https://www.hiddencitysecrets.com.au/wp-content/uploads/2019/12/grounds-of-alexandria-sydney-cafe-garden-lush-best-restaurant-9.jpg',
    'https://images.otstatic.com/prod/25055763/1/huge.jpg',
    'A popular cafe and garden, The Grounds of Alexandria serves delicious brunches and offers a unique and rustic atmosphere.',
    'Sydney, Alexandria'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Chat Thai',
    'https://resizer.otstatic.com/v2/photos/wide-huge/3/57252264.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/61/79/17/som-dtum-tard-family.jpg',
    'Known for its authentic Thai flavors, Chat Thai is a bustling and vibrant restaurant in the heart of Sydneys Thai Town.',
    'Sydney, Haymarket'
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
);


CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    restaurantID INTEGER,
    email TEXT,
    description TEXT,
    rating INTEGER
);

INSERT INTO reviews (restaurantID, email, description, rating)
VALUES 
  (2, 'user1@example.com', 'Good service!', 4),
  (1, 'user2@example.com', 'Not satisfied with the food.', 2),
  (3, 'user3@example.com', 'Excellent ambiance!', 5);