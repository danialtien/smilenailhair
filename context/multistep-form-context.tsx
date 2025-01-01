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
};

export const MultiStepFormContext = createContext({
  currentStep: 0,
  steps: [],
  handleNextStep: () => {},
  handlePrevStep: () => {},
} as MultiStepFormContextData);

export const MultiStepFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: "Apointment", number: 1 },
    { title: "Your Info", number: 2 },
    { title: "Services", number: 3 },
    { title: "Payment", number: 4 },
  ]);
  const { getItemFromLocalStorage, saveItemToLocalStorage } = useLocalStorage();

  useEffect(() => {
    const step = getItemFromLocalStorage("currentStep");
    if (step) setCurrentStep(step);
  }, [getItemFromLocalStorage]);

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveItemToLocalStorage("currentStep", `${newStepValue}`);
    }
  };

  const handlePrevStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
      saveItemToLocalStorage("currentStep", `${newStepValue}`);
    }
  };

  return (
    <MultiStepFormContext.Provider
      value={{ steps, currentStep, handleNextStep, handlePrevStep }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};
