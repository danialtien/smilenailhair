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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";

type Props = {
  formData: UseFormReturn<{ userName: string; country: string }>;
  handleNextStep: () => void;
};

export default function StepA({ formData, handleNextStep }: Props) {
  return (
    <div>
      <Card className="w-2/5 p-5 bg-amber-50">
        <CardTitle className="mt-2">Appointment</CardTitle>
        <CardDescription>Working time: 08:00 - 20:00</CardDescription>
        <CardContent className="p-5 space-y-6">
          <Form {...formData}>
            <FormDescription className="text-pink-600 font-bold border-b border-pink-600">
              Please enter some information below
            </FormDescription>
            <form
              // onSubmit={formData.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={formData.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="Fill your name here"
                        {...field}
                        className="bg-amber-100 border-amber-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formData.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormDescription>Select your country</FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          id="framework"
                          className="bg-amber-100 border border-amber-600 rounded p-2"
                        >
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="outline" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
