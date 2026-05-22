-- Optional: run after schema.sql to populate demo tour packages
-- Safe to re-run (skips if tours already exist)

INSERT INTO tours (title, location, price, duration, image, category)
SELECT * FROM (VALUES
  ('Majestic Swiss Alps Expedition', 'Switzerland', 2499, '10 Days', 'https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg', 'International'),
  ('Cherry Blossom Dreams', 'Kyoto, Japan', 1850, '7 Days', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', 'International'),
  ('Luxury Santorini Retreat', 'Greece', 2100, '8 Days', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800', 'International'),
  ('Premium Umrah Package', 'Makkah & Madinah', 1899, '14 Days', 'https://static.vecteezy.com/system/resources/thumbnails/041/853/844/small/ai-generated-the-mecca-in-saudi-arabia-photo.jpg', 'Umrah'),
  ('Luxury Umrah Experience', 'Makkah & Madinah', 2499, '14 Days', 'https://www.lifeinmadinah.com/wp-content/uploads/2024/04/intercontinental-madinah-9047763518-16x9-copy.png', 'Umrah'),
  ('Deluxe Umrah Journey', 'Makkah & Madinah', 1599, '12 Days', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_Kabah_in_the_Grand_Mosque_of_Makkah_from_the_second_floor%2C_Saudi_Arabia_%288%29_%2852501956308%29.jpg', 'Umrah'),
  ('Coastal Paradise Getaway', 'Karachi, Pakistan', 499, '3 Days', 'https://media.istockphoto.com/id/1345781376/photo/sapat-beach-balochistan.jpg?s=612x612&w=0&k=20&c=ZoRj9AwO3FqLQw3-9aTVSdLWWKp9UbOUTQMi3yFIYC4=', 'Domestic'),
  ('Highland Serenity Tour', 'Skardu, Pakistan', 650, '5 Days', 'https://images.unsplash.com/photo-1521892125404-76a993e24362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww', 'Domestic'),
  ('Urban Explorer Package', 'Islamabad, Pakistan', 350, '2 Days', 'https://t3.ftcdn.net/jpg/02/74/50/28/240_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg', 'Domestic')
) AS v(title, location, price, duration, image, category)
WHERE NOT EXISTS (SELECT 1 FROM tours LIMIT 1);
