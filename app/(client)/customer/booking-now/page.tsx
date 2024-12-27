import Stepper from "@/components/client/Stepper/Stepper";

export default function BookingPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl font-semibold text-pink-600">Reserve your spot</h1>
      <Stepper />
    </div>
  );
}
