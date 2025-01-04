"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

type MultiStepFormContextData = {
  currentStep: number;
  steps: {
    title: string;
    number: number;
  }[];
  handleNextStep: () => void;
  handlePrevStep: () => void;
  resetStep: () => void;
};

export const MultiStepFormContext = createContext({
  currentStep: 2,
  steps: [],
  handleNextStep: () => {},
  handlePrevStep: () => {},
  resetStep: () => {},
} as MultiStepFormContextData);

const STORAGE_KEY = "CURRENT_STEP";

export const MultiStepFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: "Apointment", number: 1 },
    { title: "Customer", number: 2 },
    { title: "Services", number: 3 },
    { title: "Payment", number: 4 },
  ]);
  const { getItemFromLocalStorage, saveItemToLocalStorage } = useLocalStorage();

  useEffect(() => {
    const step = getItemFromLocalStorage(STORAGE_KEY);
    if (step) setCurrentStep(step);
  }, [getItemFromLocalStorage]);

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveItemToLocalStorage(STORAGE_KEY, `${newStepValue}`);
    }
  };

  const handlePrevStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
      saveItemToLocalStorage(STORAGE_KEY, `${newStepValue}`);
    }
  };

  const resetStep = () => {
    const newStepValue = 1;
    setCurrentStep(newStepValue);
    saveItemToLocalStorage(STORAGE_KEY, `${newStepValue}`);
  };

  return (
    <MultiStepFormContext.Provider
      value={{ steps, currentStep, handleNextStep, handlePrevStep, resetStep }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};
