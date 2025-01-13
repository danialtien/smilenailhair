import Services from "@/components/client/Services/Services";
import Slider from "@/components/client/Slider/Slider";

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
  img: string;
  services: IService[];
}

interface ICustomerInfo {
  prefix: string;
  fullname: string;
  email: string;
  phone: string;
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



const servicesData = [
  {
    id: 1,
    title: "MANI & PEDI",
    description: "Professional nail care services",
    category: "nail",
    img: "/assets/Features/featurenail.jpg",
    details: [
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
    ]
  }
]


export default function ServicePage() {
  return (
    <div>
      
    </div>
  );
}
