import { z } from "zod";

export interface IBookingService {
  id: number;
  serviceName: string;
  duration: number; // Thời lượng cho một dịch vụ, ví dụ: Sơn móng tay: 45p
  numOfAttending: number; // Số lượng người đi cùng làm chung dịch vụ
  apointmentDate: Date; // Lịch hẹn
  technician: string; // Chọn thợ làm nail
  note: string;
}

export const bookingService: IBookingService[] = [
  {
    id: 1,
    serviceName: "Nail 1",
    duration: 20,
    numOfAttending: 2,
    apointmentDate: new Date(),
    technician: "Anh Trịnh Trần Phương Tuấn",
    note: "Bạn A làm màu hồng, tôi làm màu xanh",
  },
  {
    id: 2,
    serviceName: "Nail 2",
    duration: 40,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "Chị Võ Cao Kỳ Duyên",
    note: "Hãy chuẩn bị cho thôi bộ móng dài, tôi muốn làm sạch cả chân và tay trước khi làm.",
  },
];

export const inputBookingServiceSchema = z.object({
  id: z.number(),
  serviceName: z.string(),
  duration: z.number().min(5).max(120),
  numOfAttending: z.number().max(5),
  apointmentDate: z.date(),
  technician: z.string(),
  note: z.string().max(255),
});

export type InputBookingServiceData = z.infer<typeof inputBookingServiceSchema>;
