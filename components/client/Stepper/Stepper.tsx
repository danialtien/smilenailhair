import { useMultistepFormContext } from "@/hooks/use-multistep-form";
import Step from "./Step";

export default function Stepper() {
  const { currentStep, steps } = useMultistepFormContext();

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((step) => (
        <Step
          key={step.number}
          step={step}
          isActive={step.number === currentStep}
        />
      ))}
    </ol>
  );
}
