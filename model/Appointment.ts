import { Category } from "./Category";
import { Customer } from "./Customer";
import { Location } from "./Location";
import { PaymentMethod } from "./PaymentMethod";
import { Service } from "./Service";

export type Appointment = {
  id: number;
  location: Location;
  category: Category;
  services: Service[];
  customerInfo: Customer;
  paymentMethod?: PaymentMethod;
  date: string;
  time: string;
  note?: string;
};
