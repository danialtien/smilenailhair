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
