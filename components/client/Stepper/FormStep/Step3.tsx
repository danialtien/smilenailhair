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
import { toast } from "@/hooks/use-toast";

export default function Step3() {
  const { resetStep, handleNextStep, handlePrevStep } =
    useMultistepFormContext();

  // Form steup
  const { formData, clearFormData } = useMultiFormContext();
  const form = useForm({
    resolver: zodResolver(inputBookingServiceSchema),
    defaultValues: formData,
  });

  // function goForward(data: Partial<InputBookingServiceData>) {
  //   updateFormData(data);
  //   handleNextStep();
  // }

  function onSubmit(values: Partial<InputBookingServiceData>) {
    const finalData = { ...formData, ...values };
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-50 p-4">
          <code className="text-pink-900">
            {JSON.stringify(finalData, null, 2)}
          </code>
        </pre>
      ),
    });
    resetStep();
    clearFormData();
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="technician"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your technician</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-amber-100 border border-amber-600 rounded p-2">
                        <SelectValue placeholder="Please select your technician" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      <SelectItem value="Long dep trai">
                        Long dep trai
                      </SelectItem>
                      <SelectItem value="Ngoc Trinh">Ngoc Trinh</SelectItem>
                      <SelectItem value="Super Pho`">Sieu pho`</SelectItem>
                      <SelectItem value="Em gai mua">Em gai mua</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apointment date</FormLabel>
                  <FormControl>
                    <textarea
                      rows={4}
                      {...field}
                      className="bg-amber-100 border-amber-600 w-full"
                    ></textarea>
                  </FormControl>
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
