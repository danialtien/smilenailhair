
interface IService {
  id: number;
  name: string;
  price: number;
  duration: number;
  timeUnit?: string;
  description?: string;
}

interface ILocation {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface ICategory {
  id: number;
  title: string;
  avatar: string;
  services: IService[];
}


export interface ICustomerInfo {
  prefix?: string;
  fullname: string;
  id: number;
  username?: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
  isActive: boolean;
  phone: string;
  address: string;
  createdAt: Date;
}

interface IPaymentMethod {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface IAppointment {
  id: number;
  location: ILocation;
  category: ICategory;
  services: IService[];
  customerInfo: ICustomerInfo;
  paymentMethod?: IPaymentMethod;
  date: string;
  time: string;
  note?: string;
}



export const user: ICustomerInfo = {
  id: 1,
  fullname: "Admin",
  email: "admin@gmail.com",
  password: "123456",
  avatar: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
  isAdmin: true,
  isActive: true,
  phone: "0978563518",
  address: "Nhà cái đến từ châu Âu",
  createdAt: new Date(),
};

export const users: ICustomerInfo[] = [
  {
    id: 1,
    fullname: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    avatar: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
    isAdmin: true,
    isActive: true,
    phone: "0978563518",
    address: "Nhà cái đến từ châu Âu",
    createdAt: new Date(),
  },
  {
    id: 2,
    fullname: "User A",
    email: "userA@gmail.com",
    password: "123456",
    avatar: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
    isAdmin: false,
    isActive: true,
    phone: "0978563518",
    address: "Nhà cái đến từ châu Âu",
    createdAt: new Date(),
  },
];

export interface ICard {
  id: number;
  title: string;
  number: number;
  change: number;
}

export const cards: ICard[] = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];

export interface IProd {
  id: number;
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
  createdAt: Date;
}

export const products: IProd[] = [
  {
    id: 1,
    title: "Product A",
    desc: "This is a product A",
    price: 12,
    stock: 99,
    img: "https://plus.unsplash.com/premium_photo-1689609950097-1e6b05dfdba6",
    color: "#dfba7f",
    size: "3xl",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Product B",
    desc: "This is a product B",
    price: 24,
    stock: 99,
    img: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    color: "#cbc8cd",
    size: "2xl",
    createdAt: new Date(),
  },
];

export const locations: ILocation[] = [
  {
    id: 1,
    name: "Location A",
    address: "Address A",
    phone: "0978563518",
  },
  {
    id: 2,
    name: "Location B",
    address: "Address B",
    phone: "0978563518",
  },
];

export const categories: ICategory[] = [
  {
    id: 1,
    title: "Nail",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Express Pedicure",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Classic manicure",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Express Manicure",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Spa Manicure",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 2,
    title: "Hair",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Haircut",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Hair coloring",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Hair treatment",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Hair styling",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 3,
    title: "Makeup",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Makeup",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Makeup",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Makeup",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Makeup",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 4,
    title: "Spa",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Spa",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Spa",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Spa",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Spa",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
];

export const services: IService[] = [
  {
    id: 1,
    name: "Express Pedicure",
    price: 20,
    duration: 30,
    timeUnit: "minutes",
  },
  {
    id: 2,
    name: "Classic manicure",
    price: 30,
    duration: 45,
    timeUnit: "minutes",
  },
  {
    id: 3,
    name: "Express Manicure",
    price: 15,
    duration: 30,
    timeUnit: "minutes",
  }
];

// create list payment method
export const paymentMethods: IPaymentMethod[] = [
    {
      cardNumber: "123456789",
      expiryDate: "12/23",
      cvv: "123",
    },
    {
      cardNumber: "987654321",
      expiryDate: "12/23",
      cvv: "123",
    },
  ];



export const appointments: IAppointment[] = [
  {
    id: 1,
    location: locations[0],
    category: categories[0],
    services: services,
    customerInfo: user,
    paymentMethod: paymentMethods[0],
    date: "2023-12-12",
    time: "12:00",
    note: "Note for appointment",
  },
  {
    id: 2,
    location: locations[1],
    category: categories[1],
    services: services,
    customerInfo: user,
    paymentMethod: paymentMethods[1],
    date: "2023-12-12",
    time: "12:00",
    note: "Note for appointment",
  },
];





