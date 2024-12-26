import Stepper from "@/components/client/Stepper/Stepper";

export default function BookingPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 mt-2">
      <h1 className="text-xl font-semibold text-pink-600">Reserve your spot</h1>
      <Stepper />
    </main>
  );
}
