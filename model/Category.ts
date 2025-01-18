import { Service } from "./Service";

export type Category = {
  id: number;
  title: string;
  avatar: string;
  services: Service[];
};

