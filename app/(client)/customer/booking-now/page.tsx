"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { parsePhoneNumber } from "react-phone-number-input";
import { MdCalendarMonth } from "react-icons/md";
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
import { PhoneInput } from "@/components/ui/phone-input";
import { IncrementorInput } from "@/components/ui/incrementor";

import { Service } from "@/model/Service";
import CATEGORIES from "@/model/data/categories.json";
import LOCATES from "@/model/data/locates.json";
import TECHNICIANS from "@/model/data/technician.json";
import { Checkbox } from "@/components/ui/checkbox";

const bookingSchema = z.object({
  id: z.number(),
  phoneNumber: z.string().max(10),
  email: z.string().email(),
  fullName: z.string().min(5).max(100),
  numOfAttending: z.number().max(5),
  locationId: z.number(),
  appointmentDate: z.date({
    required_error: "An appointment date is required",
  }),
  appointmentTime: z.date({
    required_error: "An appointment time is required",
  }),
  technicianId: z.number(),
  services: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: "You have to choose at least one option",
  }),
  note: z.string().max(255),
});

type TypeOfBooking = z.infer<typeof bookingSchema>;

interface serviceProps {
  service: Service;
}

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
      locationId: LOCATES[0].id,
      appointmentDate: new Date(),
      appointmentTime: new Date(),
      technicianId: TECHNICIANS[0].id,
      services: [1, 2],
      note: "No content",
    },
  });
  const [services, setServices] = useState<Service[]>();

  useEffect(() => {
    setServices(CATEGORIES.flatMap((category) => category.services));
  }, []);

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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormDescription className="mx-5 text-pink-600 text-sm font-semibold border-b border-pink-600">
                  Customer infomation
                </FormDescription>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-5">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="space-y-2 w-full">
                          <FormLabel className="text-base text-black">
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <PhoneInput
                              className="h-10"
                              value={parsePhoneNumber(
                                field.value,
                                "VN",
                              )?.format("E.164")}
                              defaultCountry="VN"
                              onChange={(value) =>
                                form.setValue("phoneNumber", value)
                              }
                            />
                            {/* <Input
                              type="text"
                              {...field}
                              className="md:text-lg h-10"
                            /> */}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2 w-full">
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
                  </div>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
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
                  <FormField
                    control={form.control}
                    name="numOfAttending"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-5">
                        <FormLabel className="text-base text-black">
                          Attending Number
                        </FormLabel>
                        <FormControl>
                          <IncrementorInput
                            min={1}
                            max={5}
                            step={1}
                            {...field}
                          />
                          {/* <Input
                            type="number"
                            {...field}
                            className="md:text-lg h-10"
                          /> */}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <FormDescription className="mx-5 text-pink-600 text-sm font-semibold border-b border-pink-600">
                  Service infomation
                </FormDescription>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="locationId"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-base text-black">
                          Choose location
                        </FormLabel>
                        <Select
                          defaultValue={field.value.toString()}
                          onValueChange={(value) =>
                            form.setValue("locationId", parseInt(value))
                          }
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            {LOCATES.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={item.id.toString()}
                              >
                                {item.address}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technicianId"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-base text-black">
                          Technician
                        </FormLabel>
                        <Select
                          defaultValue={field.value.toString()}
                          onValueChange={(value) =>
                            form.setValue("technicianId", parseInt(value))
                          }
                        >
                          <FormControl>
                            <SelectTrigger className="rounded p-2">
                              <SelectValue placeholder="Please select technician" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            {TECHNICIANS.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={item.id.toString()}
                              >
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-base text-black">
                          Choose services
                        </FormLabel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
                          {services?.map((service, index) => (
                            <FormField
                              key={index}
                              control={form.control}
                              name="services"
                              render={({ field }) => (
                                <FormItem key={index}>
                                  <div className="p-4 ring ring-gray-500 rounded-xl hover:bg-slate-100">
                                    <span className="float-end rounded-md px-4 py-1 -my-3 -mx-3 text-[#ba9367] font-bold">
                                      {service.type == null && "Special"}
                                    </span>
                                    <div>
                                      <h4 className="text-xl font-semibold text-lightgrey">
                                        {service.name}
                                      </h4>
                                      <div className="flex items-center justify-between mt-4">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              service.id,
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    service.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== service.id,
                                                    ),
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <p className="text-lg font-normal text-black text-opacity-50">
                                          {service.duration} {service.timeUnit}
                                        </p>
                                        <p className="text-lg font-semibold text-black text-opacity-50">
                                          {service.price}$
                                        </p>
                                      </div>
                                      <p className="text-sm text-gray-400">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="justify-center">
                  <Button className="text-xl text-pink-600 bg-white h-12 w-96 border border-pink-600 hover:text-white hover:bg-pink-500">
                    <MdCalendarMonth className="!h-6 !w-6" />
                    Book Appointment
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
