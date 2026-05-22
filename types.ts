
export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  category: 'International' | 'Domestic' | 'Umrah';
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Partner {
  name: string;
  logo: string;
}
