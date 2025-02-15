import { Service } from "./Service";

export type Category = {
  id: number;
  title: string;
  avatar: string;
  services: Service[];
};

const categories: Category[] = [
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
        description: "",
        type: "Hairdresser",
      },
      {
        id: 2,
        name: "Classic manicure",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",

      },
      {
        id: 3,
        name: "Express Manicure",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",
      },
      {
        id: 4,
        name: "Spa Manicure",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",
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
        description: "",
        type: "Henna",
      },
      {
        id: 2,
        name: "Hair coloring",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
      },
      {
        id: 3,
        name: "Hair treatment",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
      },
      {
        id: 4,
        name: "Hair styling",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
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
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 2,
        name: "Makeup",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 3,
        name: "Makeup",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 4,
        name: "Makeup",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
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
        description: "",
        type: "Spa",
      },
      {
        id: 2,
        name: "Spa",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
      {
        id: 3,
        name: "Spa",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
      {
        id: 4,
        name: "Spa",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
    ],
  },
];