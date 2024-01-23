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
    'https://example.com/bennelong-image1.jpg',
    'https://example.com/bennelong-image2.jpg',
    'Situated in the iconic Sydney Opera House, Bennelong offers modern Australian cuisine in a stylish and elegant setting.',
    'Sydney, Circular Quay'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Momofuku Seiobo',
    'https://example.com/momofuku-image1.jpg',
    'https://example.com/momofuku-image2.jpg',
    'A part of the renowned Momofuku group, Momofuku Seiobo showcases innovative and eclectic dishes in a vibrant atmosphere.',
    'Sydney, Pyrmont'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Golden Century Seafood Restaurant',
    'https://example.com/golden-century-image1.jpg',
    'https://example.com/golden-century-image2.jpg',
    'Specializing in Chinese seafood, Golden Century is a popular choice for delicious and fresh seafood dishes in Sydney’s Chinatown.',
    'Sydney, Chinatown'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Bourke Street Bakery',
    'https://example.com/bourke-street-bakery-image1.jpg',
    'https://example.com/bourke-street-bakery-image2.jpg',
    'Known for its artisanal bread and delectable pastries, Bourke Street Bakery is a beloved spot for baked goods and coffee.',
    'Sydney, Surry Hills'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Icebergs Dining Room and Bar',
    'https://example.com/icebergs-image1.jpg',
    'https://example.com/icebergs-image2.jpg',
    'Perched above Bondi Beach, Icebergs offers modern Italian cuisine with breathtaking ocean views.',
    'Sydney, Bondi Beach'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'The Grounds of Alexandria',
    'https://example.com/grounds-of-alexandria-image1.jpg',
    'https://example.com/grounds-of-alexandria-image2.jpg',
    'A popular cafe and garden, The Grounds of Alexandria serves delicious brunches and offers a unique and rustic atmosphere.',
    'Sydney, Alexandria'
);


INSERT INTO restaurants (name, image_url1, image_url2, description, location)
VALUES (
    'Chat Thai',
    'https://example.com/chat-thai-image1.jpg',
    'https://example.com/chat-thai-image2.jpg',
    'Known for its authentic Thai flavors, Chat Thai is a bustling and vibrant restaurant in the heart of Sydney’s Thai Town.',
    'Sydney, Haymarket'
);
