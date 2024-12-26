export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  phone: string;
  address: string;
  createdAt: Date;
}

export const user: IUser = {
  id: 1,
  username: "Admin",
  email: "admin@gmail.com",
  password: "123456",
  img: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
  isAdmin: true,
  isActive: true,
  phone: "0978563518",
  address: "Nhà cái đến từ châu Âu",
  createdAt: new Date(),
};

export const users: IUser[] = [
  {
    id: 1,
    username: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    img: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
    isAdmin: true,
    isActive: true,
    phone: "0978563518",
    address: "Nhà cái đến từ châu Âu",
    createdAt: new Date(),
  },
  {
    id: 2,
    username: "User A",
    email: "userA@gmail.com",
    password: "123456",
    img: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0",
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

export interface IBookingService {
  id: number;
  serviceName: string;
  duration: number; // Thời lượng cho một dịch vụ, ví dụ: Sơn móng tay: 45p
  numOfAttending: number; // Số lượng người đi cùng làm chung dịch vụ
  apointmentDate: Date; // Lịch hẹn
  technician: string; // Chọn thợ làm nail
}

export const bookingService: IBookingService[] = [
  {
    id: 1,
    serviceName: "Nail 1",
    duration: 20,
    numOfAttending: 2,
    apointmentDate: new Date(),
    technician: "Anh Trịnh Trần Phương Tuấn",
  },
  {
    id: 2,
    serviceName: "Nail 2",
    duration: 40,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "Chị Võ Cao Kỳ Duyên",
  },
];
