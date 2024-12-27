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
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { InputBookingServiceData } from "@/model/bookingServiceModel";

type Props = {
  formData: UseFormReturn<InputBookingServiceData>;
  handleNextStep: (data: Partial<InputBookingServiceData>) => void;
};

export default function StepA({ formData, handleNextStep }: Props) {
  return (
    <Card className="w-full bg-amber-50 p-5">
      <CardTitle className="mt-2">Appointment</CardTitle>
      <CardDescription>Working time: 08:00 - 20:00</CardDescription>
      <CardContent className="p-5 space-y-6">
        <Form {...formData}>
          <FormDescription className="text-pink-600 font-bold border-b border-pink-600">
            Please enter some information below
          </FormDescription>
          <form
            onSubmit={formData.handleSubmit(handleNextStep)}
            className="space-y-8"
          >
            <FormField
              control={formData.control}
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
              control={formData.control}
              name="serviceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your service name..."
                      {...field}
                      className="bg-amber-100 border-amber-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

// Select template
{
  /*
;
*/
}
