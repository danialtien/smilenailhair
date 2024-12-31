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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  formData: UseFormReturn<InputBookingServiceData>;
  handlePrevStep: (data: Partial<InputBookingServiceData>) => void;
  handleNextStep: (data: Partial<InputBookingServiceData>) => void;
};

export default function StepB({
  formData,
  handlePrevStep,
  handleNextStep,
}: Props) {
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
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <Select
                    onValueChange={(value) => parseInt(value) && field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-amber-100 border border-amber-600 rounded p-2">
                        <SelectValue placeholder="Duration will automaticaly set when service is choosen " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                      <SelectItem value="60">60</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formData.control}
              name="numOfAttending"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attending number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      inputMode="decimal"
                      onChange={(e) => formData.setValue("numOfAttending", parseInt(e.target.value))}
                      placeholder="Enter your attending number..."
                      className="bg-amber-100 border-amber-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formData.control}
              name="technician"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apointment date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-amber-100 border-amber-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-between gap-5">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={formData.handleSubmit(handlePrevStep)}
              >
                Back
              </Button>
              <Button type="submit" className="w-full">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
