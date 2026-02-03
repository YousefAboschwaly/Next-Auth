"use client";

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { type RegisterData, RegisterSchema } from "@/schema";

interface Country {
  name: string;
  code: string;
  flag: string;
}

export default function Register() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      countryCode: "+1",
    },
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .map((c: any) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || ""),
            flag: c.flags.svg || c.flags.png,
          }))
          .filter((c: any) => c.code)
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(formatted);
      })
      .catch(() => {
        setCountries([
          { name: "USA", code: "+1", flag: "https://flagcdn.com/us.svg" },
        ]);
      });
  }, []);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.code === form.watch("countryCode")),
    [countries, form.watch("countryCode")],
  );

  const onSubmit = async (data: InsertUser) => {
    setLoading(true);
    console.log("Registration data submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f8f4f3] to-[#fefefe] p-4">
      <Card className="w-full max-w-md shadow-xl rounded-3xl border-0">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-semibold text-[#020202]">
            Create Account
          </CardTitle>
          <p className="text-sm text-gray-500 mt-2">Sign up to get started</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="h-12 rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="h-12 rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="h-12 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm"
                          {...field}
                          className="h-12 rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="mb-1">Country</FormLabel>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full h-12 rounded-xl justify-between px-3 font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <div className="flex items-center gap-2 overflow-hidden">
                                {selectedCountry && (
                                  <Image
                                    width={16}
                                    height={12}
                                    src={selectedCountry.flag}
                                    alt=""
                                    className="w-4 h-3 object-cover rounded-sm shrink-0"
                                  />
                                )}
                                <span className="truncate">
                                  {field.value || "Code"}
                                </span>
                              </div>
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-75 p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search country or code..." />
                            <CommandList>
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup>
                                {countries.map((c, i) => (
                                  <CommandItem
                                    value={`${c.name} ${c.code}`}
                                    key={`${c.code}-${i}`}
                                    onSelect={() => {
                                      form.setValue("countryCode", c.code);
                                      setOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        c.code === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    <Image
                                      width={16}
                                      height={12}
                                      src={c.flag}
                                      alt=""
                                      className="w-4 h-3 object-cover rounded-sm mr-2"
                                    />
                                    <span className="flex-1 truncate">
                                      {c.name}
                                    </span>
                                    <span className="text-muted-foreground ml-2">
                                      {c.code}
                                    </span>
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone number"
                            {...field}
                            className="h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#be968e] hover:bg-[#a8827a] text-white rounded-xl font-medium mt-4"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-[#be968e] font-medium hover:underline"
                >
                  <Link href="/login">Sign In</Link>
                </button>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
