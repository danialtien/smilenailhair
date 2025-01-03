import { MultiStepFormContext } from "@/contexts/multistep-form-context";
import { useContext } from "react";

export function useMultistepFormContext() {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error(
      "useMultistepFormContext must be used within a MultistepFormContextProvider",
    );
  }

  return context;
}
