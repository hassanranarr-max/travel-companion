
import { Tour, Testimonial, Stat, Partner } from './types';

export const INTERNATIONAL_TOURS: Tour[] = [
  {
    id: 'int-1',
    title: 'Majestic Swiss Alps Expedition',
    location: 'Switzerland',
    price: 2499,
    duration: '10 Days',
    image: 'https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg',
    category: 'International'
  },
  {
    id: 'int-2',
    title: 'Cherry Blossom Dreams',
    location: 'Kyoto, Japan',
    price: 1850,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    category: 'International'
  },
  {
    id: 'int-3',
    title: 'Luxury Santorini Retreat',
    location: 'Greece',
    price: 2100,
    duration: '8 Days',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    category: 'International'
  }
];

export const UMRAH_TOURS: Tour[] = [
  {
    id: 'umr-1',
    title: 'Premium Umrah Package',
    location: 'Makkah & Madinah',
    price: 1899,
    duration: '14 Days',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/041/853/844/small/ai-generated-the-mecca-in-saudi-arabia-photo.jpg',
    category: 'Umrah'
  },
  {
    id: 'umr-2',
    title: 'Luxury Umrah Experience',
    location: 'Makkah & Madinah',
    price: 2499,
    duration: '14 Days',
    image: 'https://www.islamic-relief.org.uk/wp-content/uploads/2024/04/Difference-Hajj-and-Umrah-hero.jpg',
    category: 'Umrah'
  },
  {
    id: 'umr-3',
    title: 'Deluxe Umrah Journey',
    location: 'Makkah & Madinah',
    price: 1599,
    duration: '12 Days',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_Kabah_in_the_Grand_Mosque_of_Makkah_from_the_second_floor%2C_Saudi_Arabia_%288%29_%2852501956308%29.jpg',
    category: 'Umrah'
  }
];

export const DOMESTIC_TOURS: Tour[] = [
  {
    id: 'dom-1',
    title: 'Coastal Paradise Getaway',
    location: 'Karachi, Pakistan',
    price: 499,
    duration: '3 Days',
    image: 'https://media.istockphoto.com/id/1345781376/photo/sapat-beach-balochistan.jpg?s=612x612&w=0&k=20&c=ZoRj9AwO3FqLQw3-9aTVSdLWWKp9UbOUTQMi3yFIYC4=',
    category: 'Domestic'
  },
  {
    id: 'dom-2',
    title: 'Highland Serenity Tour',
    location: 'Skardu, Pakistan',
    price: 650,
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww',
    category: 'Domestic'
  },
  {
    id: 'dom-3',
    title: 'Urban Explorer Package',
    location: 'Islamabad, Pakistan',
    price: 350,
    duration: '2 Days',
    image: 'https://t3.ftcdn.net/jpg/02/74/50/28/240_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg',
    category: 'Domestic'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Umar Ahmad',
    role: 'Frequent Traveler',
    content: 'The attention to detail and personalized service from Travel Companion is unmatched. Our Swiss Alps trip was a dream come true!',
    avatar: 'https://cdn-icons-png.flaticon.com/512/3233/3233508.png',
    rating: 5
  },
  {
    id: 't2',
    name: 'Fatima Akram',
    role: 'Business Consultant',
    content: 'Incredible experience booking my business flights and family vacations. They handle everything with total professionalism.',
    avatar: 'https://img.freepik.com/premium-vector/customer-female-icon-vector-image-can-be-used-street-food_120816-89399.jpg',
    rating: 5
  },
  {
    id: 't3',
    name: 'Zainab Khan',
    role: 'Adventure Enthusiast',
    content: 'From the booking process to the tour guide, everything was seamless. Highly recommend their domestic packages too!',
    avatar: 'https://img.freepik.com/premium-vector/customer-female-icon-vector-image-can-be-used-street-food_120816-89399.jpg',
    rating: 4
  }
];

export const STATS: Stat[] = [
  { label: 'Happy Customers', value: '12,000+', icon: 'Users' },
  { label: 'Tour Packages', value: '150+', icon: 'Map' },
  { label: 'Partner Airlines', value: '45+', icon: 'Plane' },
  { label: 'Destinations', value: '280+', icon: 'Globe' }
];

export const PARTNERS: Partner[] = [
  { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
  { name: 'Qatar Airways', logo: 'https://www.britishcouncil.or.th/sites/default/files/styles/bc-landscape-950x534/public/qatar_logo.jpg?itok=EUnKNQGB' },
  { name: 'Turkish Airlines', logo: 'https://cdn.worldvectorlogo.com/logos/turkish-airlines-logo.svg' },
  { name: 'Singapore Airlines', logo: 'https://download.logo.wine/logo/Singapore_Airlines/Singapore_Airlines-Logo.wine.png' },
  { name: 'British Airways', logo: 'https://mediacentre.britishairways.com/contents/archives/216/86/images/thumb1280x1683_width/britishairways_216861253015751_thumb.jpg' }
];
