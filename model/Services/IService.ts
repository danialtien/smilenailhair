export interface IService {
    id: number;
    name: string;
    price: number;
    duration: number;
    timeUnit?: string;
    description?: string;
    type?: string;
    image?: string;
}

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