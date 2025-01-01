"use client";

import {
  bookingService,
  InputBookingServiceData,
} from "@/model/bookingServiceModel";
import { createContext, ReactNode, useContext, useState } from "react";

interface MultistepFormContextType {
  formData: InputBookingServiceData;
  updateFormData: (data: Partial<InputBookingServiceData>) => void;
  clearFormData: () => void;
}

const MultistepFormContext = createContext<
  MultistepFormContextType | undefined
>(undefined);

const STORAGE_KEY = "multistep_form_data";

export default function MultistepFormContextProvider({
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
    <MultistepFormContext.Provider
      value={{ formData, updateFormData, clearFormData }}
    >
      {children}
    </MultistepFormContext.Provider>
  );
}

export function useMultistepFormContext() {
  const context = useContext(MultistepFormContext);
  if (context === undefined) {
    throw new Error(
      "useMultistepFormContext must be used within a MultistepFormContextProvider",
    );
  }
  return context;
}
