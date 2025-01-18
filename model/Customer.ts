export type Customer = {
  prefix?: string;
  fullname: string;
  id: number;
  username?: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  phone: string;
  address: string;
  createdAt: Date;
};
