import { IService } from "../Services/IService";

export interface ICategory {
    id: number;
    title: string;
    avatar: string;
    services: IService[];
  }
  