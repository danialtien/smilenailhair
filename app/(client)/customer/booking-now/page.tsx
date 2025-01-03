"use client";

import Stepper from "@/components/client/Stepper/Stepper";
import { MultiStepFormProvider } from "@/contexts/multistep-form-context";

export default function BookingPage() {
  return (
    <MultiStepFormProvider>
      <main className="w-full my-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl font-semibold text-pink-600">
          Reserve your spot
        </h1>
        <div className="w-2/5 flex flex-col items-center justify-center gap-5">
          <Stepper />
        </div>
        {/* <FormStep /> */}
      </main>
    </MultiStepFormProvider>
  );
}
