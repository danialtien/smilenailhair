"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputBookingServiceData,
  inputBookingServiceSchema,
} from "@/model/bookingServiceModel";
import { useMultistepFormContext } from "@/hooks/use-multistep-form";
import { useMultiFormContext } from "@/hooks/use-multi-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepperHandler from "../StepperHandler/StepperHandler";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// type Props = {
//   formData: UseFormReturn<InputBookingServiceData>;
//   handleNextStep: (data: Partial<InputBookingServiceData>) => void;
// };

export default function Step1() {
  const { handleNextStep, handlePrevStep } = useMultistepFormContext();

  // Form setup
  const { formData, updateFormData } = useMultiFormContext();
  const form = useForm<InputBookingServiceData>({
    resolver: zodResolver(
      inputBookingServiceSchema.pick({ id: true, serviceName: true }),
    ),
    defaultValues: {
      id: formData.id,
      serviceName: formData.serviceName,
    },
  });

  function goForward(data: Partial<InputBookingServiceData>) {
    updateFormData(data);
    handleNextStep();
  }

  return (
    <Card className="w-full bg-amber-50 p-5">
      <CardTitle className="mt-2">Appointment</CardTitle>
      <CardDescription>Working time: 08:00 - 20:00</CardDescription>
      <CardContent className="p-5 space-y-6">
        <Form {...form}>
          <FormDescription className="text-pink-600 font-bold border-b border-pink-600">
            Please enter some information below
          </FormDescription>
          <form onSubmit={form.handleSubmit(goForward)} className="space-y-8">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled
                      {...field}
                      className="bg-amber-100 border-amber-600 disabled:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-amber-100 border border-amber-600 rounded p-2">
                        <SelectValue placeholder="Please select your service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      <SelectItem value="Nail">Nail</SelectItem>
                      <SelectItem value="XxX">XxX</SelectItem>
                      <SelectItem value="SVP Nail">
                        Super vip pro nail
                      </SelectItem>
                      <SelectItem value="Eyes only">Eyes only</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StepperHandler handleGoBack={handlePrevStep} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
