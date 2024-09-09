"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FormDataSchema } from "@src/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ReactConfetti from "react-confetti";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { Toast } from "@src/context/ToastContex";
import userAction from "@src/lib/actions/user.action";
import { getCookie } from "cookies-next";
import sellerAction from "@src/lib/actions/seller.action";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["owner", "mobile", "email", "store_name", "gst_no"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  {
    id: "Step 3",
    name: "Security",
    fields: ["password"],
  },
  { id: "Step 4", name: "Complete" },
];

export default function SellerReg() {
  // Setup Hooks
  //Form Steps
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Data States
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState();
  const [seller, setSeller] = useState();

  const delta = currentStep - previousStep;

  // Router Hook
  const router = useRouter();

  // Toast function
  const { warn, success, error } = Toast();

  // useForm Zod
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormDataSchema),
  });

  // Redirecting to Seller Dashboard
  const redirect = () => {
    setTimeout(() => {
      router.push("/user-profile");
    }, 5000);
  };

  // form next step
  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  // form prev step
  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  // Password Visible Toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Form Submit
  const processForm = (data) => {
    try {
      const token =
        JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");

      // Step 1: Create seller
      sellerAction
        .registerSeller(token, data)
        .then((resp) => {
          setSeller(resp.data.data);
        })
        .catch((e) => {
          console.log("Error:", e);
          error("Something Went Wrong While Seller Registration!");
        });

      const userId = user?.id; // Get user's ID
      const sellerId = seller?.id; // Get created seller's ID

      // Step 3: Update the user's role to "seller"
      userAction
        .updateUserRole(token, userId, 3)
        .then((resp) => {
          success("You are register as seller successfully!");
        })
        .catch((e) => {
          warn(e);
          error("Something Went Wrong!");
        });

      redirect();
    } catch (e) {
      warn(e);
      error("Somthing Went Wrong");
    }
  };

  // Fetching User
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");
    userAction
      .fetchLoggedInUser(token)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  return (
    <section className="inset-0 bg-white p-14 rounded-xl flex flex-col justify-between overflow-hidden">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary_light transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary_light">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-8" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-800">
              Basic Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide some basic detail about yourself!
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="owner"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Owner Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="owner"
                    placeholder="Aditya Mali"
                    {...register("owner")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.owner?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.owner.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile No.
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    type="text"
                    autoComplete="phone"
                    placeholder="+91 738530XXXX"
                    {...register("mobile")}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.mobile?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="superbike@gamil.com"
                    value={user?.email}
                    readOnly
                    {...register("email")}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="store_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Store Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="store_name"
                    {...register("store_name")}
                    placeholder="N G Bikes"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.store_name?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.store_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="gst_no"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  GSTIN.
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="gst_no"
                    {...register("gst_no")}
                    placeholder="Enter your GSTIN"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.gst_no?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.gst_no.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:none sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>India</option>
                  </select>
                  {errors.country?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("street")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.street?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="state"
                    {...register("state")}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.state?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="zip"
                    {...register("zip")}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6"
                  />
                  {errors.zip?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Security Password
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Set password required at the time of Login.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <span className="flex justify-between items-center w-full rounded-md border-0 text-gray-900 shadow-sm pr-2 ring-1 ring-gray-300 focus:ring-2 focus:none">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="************"
                      {...register("password")}
                      autoComplete="password"
                      className="w-full placeholder:text-gray-400 outline-none sm:text-base sm:leading-6 p-2"
                    />
                    <Icon
                      icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                      width={25}
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer"
                    />
                  </span>
                  {errors.password?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                  <div>
                    <ul className="flex flex-col gap-1 text-sm list-disc ml-5 mt-7">
                      <li>Password must not contain Whitespaces.</li>
                      <li>
                        Password must have at least one Uppercase Character.
                      </li>
                      <li>
                        Password must have at least one Lowercase Character.
                      </li>
                      <li>Password must contain at least one Digit.</li>
                      <li>
                        Password must contain at least one Special Symbol.
                      </li>
                      <li>Password must be 8-14 Characters Long.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <>
            <div className="flex flex-col items-center justify-center h-[46vh]">
              <h1 className="text-[65px] font-bold text-center mb-8 text-primary">
                Thank You!
              </h1>
              <p className="text-lg text-gray-700 text-center">
                Your form has been submitted successfully.
              </p>
              <p className="text-lg text-gray-700 text-center">
                You will be redirected shortly.
              </p>
              <Link href="/user-profile">
                <Button className="text-white hover:scale-[1.03] mt-4">
                  Go back to Profile.
                </Button>
              </Link>
              <ReactConfetti />
            </div>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary_dark hover:bg-primary_light/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary_dark hover:bg-primary_light/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
