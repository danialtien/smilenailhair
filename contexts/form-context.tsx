"use client";

import {
  bookingService,
  InputBookingServiceData,
} from "@/model/bookingServiceModel";
import { createContext, ReactNode, useState } from "react";

interface MultiFormContextType {
  formData: InputBookingServiceData;
  updateFormData: (data: Partial<InputBookingServiceData>) => void;
  clearFormData: () => void;
}

// export const MultiFormContext = createContext<MultiFormContextType | undefined>(
//   undefined,
// );

export const MultiFormContext = createContext({
  formData: {
    id: bookingService[bookingService.length - 1].id,
    serviceName: "",
    duration: 5,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "",
    note: "",
  },
  updateFormData: () => {},
  clearFormData: () => {},
} as MultiFormContextType);

const STORAGE_KEY = "multistep_form_data";

export default function MultiFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const initialFormData: InputBookingServiceData = {
    id: bookingService[bookingService.length - 1].id,
    serviceName: "",
    duration: 5,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "",
    note: "",
  };

  const [formData, setFormData] = useState<InputBookingServiceData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialFormData;
  });

  const updateFormData = (data: Partial<InputBookingServiceData>) => {
    const updatedData = { ...formData, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  const clearFormData = () => {
    setFormData(initialFormData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <MultiFormContext.Provider
      value={{ formData, updateFormData, clearFormData }}
    >
      {children}
    </MultiFormContext.Provider>
  );
}
