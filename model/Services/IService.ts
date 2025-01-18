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
