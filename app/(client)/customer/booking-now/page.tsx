"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const bookingSchema = z.object({
  id: z.number(),
  phoneNumber: z.string().max(10),
  email: z.string().email(),
  fullName: z.string().min(5).max(100),
  numOfAttending: z.number().max(5),
  location: z.string(),
  appointmentDate: z.date({
    required_error: "An appointment date is required",
  }),
  appointmentTime: z.date({
    required_error: "An appointment time is required",
  }),
  technician: z.string(),
  services: z.string(),
  note: z.string().max(255),
});

type TypeOfBooking = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  // Form setup
  const form = useForm<TypeOfBooking>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      id: 1,
      phoneNumber: "0948263712",
      email: "truongdeptrai@gmail.com",
      fullName: "Truong Dep Trai",
      numOfAttending: 1,
      location: "HCM",
      appointmentDate: new Date(),
      appointmentTime: new Date(),
      technician: "Ngoc Trinh",
      services: "Fingers Nail",
      note: "No content",
    },
  });

  function onSubmit(data: Partial<TypeOfBooking>) {
    toast({
      title: "You submitted the following data:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-50 p-4">
          <code className="text-pink-900">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className="w-full my-5 flex flex-col items-center gap-5">
      <h1 className="text-xl font-semibold text-pink-600">Reserve your spot</h1>

      {/* <========> Tabs <========> */}
      <Tabs defaultValue="appointment" className="w-1/2">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="appointment">Appointment</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <Card className="p-5 space-y-8">
            <CardHeader className="space-x-3 p-0 px-6">
              <CardTitle className="text-xl">Appointment</CardTitle>
              <CardDescription className="text-base">
                Open time:{" "}
                <label className="text-pink-600">08:00 - 20:00</label>
              </CardDescription>
              <CardDescription className="text-base">
                Phone: <label className="text-pink-600">1900 228 828</label>
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <FormDescription className="mx-5 text-pink-600 font-semibold border-b border-pink-600">
                Please enter some information below
              </FormDescription>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="flex items-center gap-5">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Phone number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="md:text-lg h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="md:text-lg h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardContent className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="md:text-lg h-10"
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
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Attending Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            className="md:text-lg h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Choose location
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="HCM">Ho Chi Minh</SelectItem>
                            <SelectItem value="HN">Ha Noi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technician"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Technician
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select technician" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="Ngoc Trinh">
                              Ngoc Trinh
                            </SelectItem>
                            <SelectItem value="Ngoc Linh">Ngoc Linh</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Choose location
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="HCM">Ho Chi Minh</SelectItem>
                            <SelectItem value="HN">Ha Noi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technician"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Technician
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select technician" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="Ngoc Trinh">
                              Ngoc Trinh
                            </SelectItem>
                            <SelectItem value="Ngoc Linh">Ngoc Linh</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardContent className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="md:text-lg h-10"
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
                      <FormItem className="space-y-1 w-full">
                        <FormLabel className="text-base text-black">
                          Attending Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            className="md:text-lg h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Choose location
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="HCM">Ho Chi Minh</SelectItem>
                            <SelectItem value="HN">Ha Noi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technician"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-base text-black">
                          Technician
                        </FormLabel>
                        <Select
                          // onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select technician" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <SelectItem value="Ngoc Trinh">
                              Ngoc Trinh
                            </SelectItem>
                            <SelectItem value="Ngoc Linh">Ngoc Linh</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="justify-end">
                  <Button className="text-lg text-pink-600 bg-white h-10 border border-pink-600 hover:text-white hover:bg-pink-500">
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        <TabsContent value="locations">
          <Card>
            <CardHeader>
              <CardTitle>Locations</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
