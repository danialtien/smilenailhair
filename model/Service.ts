export type Service = {
  id: number;
  name: string;
  price: number;
  duration: number;
  timeUnit?: string;
  description?: string;
  type?: string;
  image?: string;
};



const services: Service[] = [
  {
    id: 1,
    name: "Express Pedicure",
    price: 20,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 2,
    name: "Classic manicure",
    price: 30,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 3,
    name: "Express Manicure",
    price: 15,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 4,
    name: "Express Pedicure",
    price: 20,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 5,
    name: "Classic manicure",
    price: 30,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 6,
    name: "Express Manicure",
    price: 15,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 6,
    name: "Spa Manicure",
    price: 25,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
];