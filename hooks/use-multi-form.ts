import { MultiFormContext } from "@/contexts/multi-form-context";
import { useContext } from "react";

export function useMultiFormContext() {
  const context = useContext(MultiFormContext);

  if (!context) {
    throw new Error(
      "useMultiFormContext must be used within a MultiFormContextProvider",
    );
  }

  return context;
}
