"use client";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import bikesAction from "@src/lib/actions/bikes.action";
// import { Input, Button, Select, Form, Label } from "shadcn-ui";

const steps = [
  {
    id: "Step 1",
    name: "Basic Details",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "Step 3", name: "Complete" },
];

const bikeListingSchema = z.object({
  brand_or_company_name: z.string().min(1, "Brand is required"),
  bike_model: z.string().min(1, "Model is required"),
  variant: z.string().min(1, "Variant is required"),
  manufacturing_year: z
    .number()
    .min(1900, "Invalid year")
    .max(new Date().getFullYear()),
  km_ridden: z.number().min(0, "Kilometers must be positive"),
  city: z.string().min(1, "City is required"),
  expected_price: z.number().min(1, "Expected price is required"),
  owner_name: z.string().min(1, "Owner name is required"),
  registration: z.string().min(1, "Registration is required"),
  colour: z.string().min(1, "Colour is required"),
  description: z.string().optional(),
  body_condition: z.enum(["Scratch on panel", "Scratch/Broken Headlights"]),
});

export default function BikeListingForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bikeListingSchema),
  });

  useEffect(() => {
    // Fetch bike brands, models, and variants from API
    bikesAction.getBikeBrands().then((resp) => {
      setBrands(resp.data.data);
    });
    bikesAction.getModels().then((resp) => {
      setModels(resp.data.data);
    });
    bikesAction.getVariants().then((resp) => {
      setVariants(resp.data.data);
    });
  }, []);

  const onSubmit = async (formData) => {
    // Fetch selected brand and model names
    const selectedBrand = brands?.find(
      (brand) => brand?.id === parseInt(formData?.brand_or_company_name)
    );
    const selectedModel = models?.find(
      (model) => model?.id === parseInt(formData.bike_model)
    );

    // Generate the listing name
    const listingName = `${selectedBrand?.attributes?.name} ${selectedModel?.attributes?.name}`;

    // Prepare final data
    const finalData = {
      ...formData,
      name: listingName,
    };

    try {
      await axios.post("http://localhost:1337/api/bike-listings", {
        data: finalData,
      });
      alert("Bike Listing Submitted Successfully");
    } catch (error) {
      console.error("Error submitting bike listing:", error);
    }
  };

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

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="bg-white p-14 rounded-xl flex flex-col justify-between overflow-hidden w-[70%]">
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 0 && (
          <div className="mt-12 py-8 space-y-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Basic Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide some basic detail about bike!
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
              <div className="sm:col-span-3">
                <Label>Brand</Label>
                <Select {...register("brand_or_company_name")}>
                  <SelectTrigger className="w-full mt-2 rounded-md border-0 p-2 text-gray-900 shadow-sm bg-black/5 sm:text-sm sm:leading-6">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Brands</SelectLabel>
                      {brands?.map((item, id) => {
                        return (
                          <SelectItem
                            value={item.id}
                            key={id}
                            className="hover:!text-primary cursor-pointer text-center"
                          >
                            {item?.attributes?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.brand_or_company_name && (
                  <span>{errors.brand_or_company_name.message}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Label>Models</Label>
                <Select {...register("bike_model")}>
                  <SelectTrigger className="w-full mt-2 rounded-md border-0 p-2 text-gray-900 shadow-sm bg-black/5 sm:text-sm sm:leading-6">
                    <SelectValue placeholder="Models" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Models</SelectLabel>
                      {models?.map((item, id) => {
                        return (
                          <SelectItem
                            value={item.id}
                            key={id}
                            className="hover:!text-primary cursor-pointer text-center"
                          >
                            {item?.attributes?.model_name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.bike_model && <span>{errors.bike_model.message}</span>}
              </div>

              <div className="sm:col-span-3">
                <Label>Variants</Label>
                <Select {...register("variant")}>
                  <SelectTrigger className="w-full mt-2 rounded-md border-0 p-2 text-gray-900 shadow-sm bg-black/5 sm:text-sm sm:leading-6">
                    <SelectValue placeholder="Variants" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Variants</SelectLabel>
                      {variants?.map((item, id) => {
                        return (
                          <SelectItem
                            value={item.id}
                            key={id}
                            className="hover:!text-primary cursor-pointer"
                          >
                            {item?.attributes?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.variant && <span>{errors.variant.message}</span>}
              </div>

              <div className="sm:col-span-9">
                <Label>Year of Manufacturing</Label>
                <Input
                  type="number"
                  {...register("manufacturing_year")}
                  placeholder="1999"
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.manufacturing_year && (
                  <span>{errors.manufacturing_year.message}</span>
                )}
              </div>

              <div className="sm:col-span-9">
                <Label>Kms Ridden</Label>
                <Input
                  type="number"
                  {...register("km_ridden")}
                  placeholder="1075 Kms"
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.km_ridden && <span>{errors.km_ridden.message}</span>}
              </div>

              <div className="sm:col-span-9">
                <Label>City</Label>
                <Input
                  type="text"
                  {...register("city")}
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.city && (
                  <span className="mt-2 text-sm text-red-400">
                    {errors.city.message}
                  </span>
                )}
              </div>

              {/* <div className="sm:col-span-9">
                <Label>Expected Price</Label>
                <Input
                  type="number"
                  {...register("expected_price")}
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.expected_price && (
                  <span>{errors.expected_price.message}</span>
                )}
              </div> */}

              <div className="sm:col-span-9">
                <Label>Owner Name</Label>
                <Input
                  type="text"
                  {...register("owner_name")}
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.owner_name && <span>{errors.owner_name.message}</span>}
              </div>

              <div className="sm:col-span-9">
                <Label>Registration</Label>
                <Input
                  type="text"
                  {...register("registration")}
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.registration && (
                  <span>{errors.registration.message}</span>
                )}
              </div>

              <div className="sm:col-span-9">
                <Label>Colour</Label>
                <Input
                  type="text"
                  {...register("colour")}
                  className="w-full mt-2 rounded-md border-0 p-3 text-gray-900 shadow-sm bg-black/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.colour && <span>{errors.colour.message}</span>}
              </div>

              <div className="sm:col-span-9">
                <Label>Body Condition</Label>
                <Select {...register("body_condition")}>
                  <option value="Scratch on panel">Scratch on panel</option>
                  <option value="Scratch/Broken Headlights">
                    Scratch/Broken Headlights
                  </option>
                </Select>
                {errors.body_condition && (
                  <span>{errors.body_condition.message}</span>
                )}
              </div>

              <Button type="submit">Save and Continue</Button>
            </div>
          </div>
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
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
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

        {/* {currentStep === 2 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </>
        )} */}
      </Form>

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
