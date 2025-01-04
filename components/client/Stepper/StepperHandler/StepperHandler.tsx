import { Button } from "@/components/ui/button";
import { useMultistepFormContext } from "@/hooks/use-multistep-form";

interface StepperHandlerProps {
  handleGoBack: () => void;
}

export default function StepperHandler({ handleGoBack }: StepperHandlerProps) {
  const { currentStep, steps } = useMultistepFormContext();
  const isLastStep = currentStep === steps[steps.length - 1].number;

  return (
    <div className="flex items-center justify-between w-full gap-5">
      <Button
        type="button"
        variant="outline"
        onClick={handleGoBack}
        className={`w-full ${currentStep === 1 ? "invisible" : "visible"}`}
      >
        Go Back
      </Button>
      <Button type="submit" className="w-full">
        {isLastStep ? "Confirm" : "Next"}
      </Button>
    </div>
  );
}
