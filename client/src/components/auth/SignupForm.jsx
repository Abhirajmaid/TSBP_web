"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import userAction from "@src/lib/actions/user.action";
import { Toast } from "@src/context/ToastContex";

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  mobile_number: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number must be less than 15 digits" })
    .regex(/^[0-9]+$/, { message: "Mobile number can only contain digits" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(15, { message: "Password must be no more than 15 characters long" }),
});

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { success, error, warn } = Toast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      mobile_number: "",
      password: "",
    },
  });

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function onSubmit(values) {
    setLoader(true);
    if (isChecked) {
      userAction
        .registerUser(values)
        .then((resp) => {
          sessionStorage.setItem("user", JSON.stringify(resp.data.user));
          sessionStorage.setItem("jwt", JSON.stringify(resp.data.jwt));
          success("You are Successfully Signed Up");
          setLoader(false);
          setCookie("jwt", resp.data.jwt, { maxAge: 60 * 60 * 24 });
          router.push("/store");
        })
        .catch((e) => {
          console.log(e);
          warn("Server Error!");
          error(e?.response?.data?.error?.message);
          setLoader(false);
        });
    } else {
      warn("Agree to Terms and Conditions!");
    }
  }

  return (
    <div className="flex min-h-[100vh] bg-white flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 min-h-full">
        <Image
          src="/images/contact_us.png"
          alt="netgarages"
          className="object-cover w-full min-h-full"
          width={1500}
          height={1500}
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-6 md:pl-[80px]">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Sign up</h2>
        <p className="text-gray-600 mb-12">
          Sign up for free to experience a new world of Jewellery.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full md:w-[80%]"
          >
            {["username", "email", "mobile_number", "password"].map(
              (fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fieldName === "username"
                          ? "First and Last Name*"
                          : fieldName === "email"
                          ? "Email Address*"
                          : fieldName === "mobile_number"
                          ? "Mobile Number (WhatsApp) *"
                          : "Set Password *"}
                      </FormLabel>
                      <FormControl>
                        <input
                          type={fieldName === "password" ? "password" : "text"}
                          placeholder={
                            fieldName === "username"
                              ? "John Doe"
                              : fieldName === "email"
                              ? "jhondoe@gmail.com"
                              : fieldName === "mobile_number"
                              ? "+91 7385302967"
                              : "***"
                          }
                          {...field}
                          className="w-full px-4 !py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormDescription>
                        {fieldName === "username"
                          ? "Put your First and Last name."
                          : fieldName === "email"
                          ? "Put your email address."
                          : fieldName === "mobile_number"
                          ? "Put your WhatsApp mobile no."
                          : "Put min 6 character password."}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2 rounded text-primary focus:ring-primary"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terms" className="text-gray-600">
                  Agree to our
                  <a href="#" className="text-primary">
                    {" "}
                    Terms of use{" "}
                  </a>
                  and
                  <a href="#" className="text-primary">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 rounded text-primary focus:ring-primary"
                />
                <label htmlFor="newsletter" className="text-gray-600">
                  Subscribe to our new design catalogue
                </label>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              disabled={loader}
              className="w-full md:w-[30%] bg-primary text-white py-6 rounded-lg hover:bg-primary-dark transition"
            >
              Sign up
            </Button>

            <p className="text-start text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-primary">
                Log in
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
