"use client";

import FormStep from "@/components/client/FormStep/FormStep";
import Stepper from "@/components/client/Stepper/Stepper";
import { MultiFormProvider } from "@/contexts/multi-form-context";
import { MultiStepFormProvider } from "@/contexts/multistep-form-context";

export default function BookingPage() {
  return (
    <MultiStepFormProvider>
      <MultiFormProvider>
        <main className="w-full my-5 flex flex-col items-center justify-center gap-5">
          <h1 className="text-xl font-semibold text-pink-600">
            Reserve your spot
          </h1>
          <Stepper />
          <FormStep />
        </main>
      </MultiFormProvider>
    </MultiStepFormProvider>
  );
}
