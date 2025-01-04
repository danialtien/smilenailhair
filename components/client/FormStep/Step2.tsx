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
import StepperHandler from "../Stepper/StepperHandler/StepperHandler";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function Step2() {
  const { handleNextStep, handlePrevStep } = useMultistepFormContext();

  // Form steup
  const { formData, updateFormData } = useMultiFormContext();
  const form = useForm({
    resolver: zodResolver(
      inputBookingServiceSchema.pick({
        duration: true,
        numOfAttending: true,
        apointmentDate: true,
      }),
    ),
    defaultValues: {
      duration: formData.duration,
      numOfAttending: formData.numOfAttending,
      apointmentDate: formData.apointmentDate,
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
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      inputMode="decimal"
                      onChange={(e) =>
                        form.setValue("duration", parseInt(e.target.value))
                      }
                      placeholder="Enter your number..."
                      className="bg-amber-100 border-amber-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numOfAttending"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attending number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      inputMode="decimal"
                      onChange={(e) =>
                        form.setValue(
                          "numOfAttending",
                          parseInt(e.target.value),
                        )
                      }
                      placeholder="Enter your attending number..."
                      className="bg-amber-100 border-amber-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apointmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apointment Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
