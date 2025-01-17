import { useMultiFormContext } from "@/hooks/use-multi-form";
import StepperHandler from "../StepperHandler/StepperHandler";
import { Button } from "@/components/ui/button";
import { useMultistepFormContext } from "@/hooks/use-multistep-form";

export default function Step4() {
  const { resetStep, handlePrevStep } = useMultistepFormContext();
  const { formData, clearFormData } = useMultiFormContext();

  function onSubmit() {
    clearFormData();
    resetStep();
  }

  return (
    <Button type="button" onClick={onSubmit}>
      Confirm
    </Button>
  );
}
