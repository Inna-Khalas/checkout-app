"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import React, { useEffect } from "react";
import RouteForm from "@/components/RouteForm";
import { AboutTheCargo } from "@/components/AboutTheCargo";
import { LeaveAComment } from "@/components/LeaveComent";
import { ContactInformation } from "@/components/ContactInfo";
import { PaymentBlock } from "@/components/PaymentBlock";
import { OrderSidebar } from "@/components/OrderSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const schema = yup.object({
  points: yup
    .array()
    .of(
      yup.object({
        location: yup.string().required("Required"),
        time: yup.string(),
      })
    )
    .min(2, "Minimum two points required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  cargoType: yup.string().required("Type required"),
  weight: yup.string(),
  size: yup.object({
    length: yup.string(),
    width: yup.string(),
    height: yup.string(),
    unit: yup.string(),
  }),
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string(),
  forwarding: yup.boolean(),
  comment: yup.string().max(4000),
  useCustomPrice: yup.boolean(),
  customPrice: yup.string(),
});

export type CheckoutFormValues = yup.InferType<typeof schema>;

const CheckoutPage = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      points: [
        { location: "", time: "" },
        { location: "", time: "" },
        { location: "", time: "" },
      ],
      date: "",
      time: "",
      cargoType: "",
      weight: "",
      size: { length: "", width: "", height: "" },
      name: "",
      phone: "",
      email: "",
      company: "",
      forwarding: true,
      comment: "",
      useCustomPrice: false,
      customPrice: "",
    },
  });

  const { handleSubmit, watch, reset, formState } = methods;
  const { isValid } = formState;

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
    console.log("SUBMIT DATA:", data);
    reset();
  };

  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem("checkout", JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const routePoints = methods.watch("points")?.map((p) => p.location) || [];

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="min-h-screen bg-[#fff] p-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow space-y-6">
                <h1 className="text-2xl text-gray-950 font-semibold">
                  Checkout
                </h1>
                <RouteForm />
                <AboutTheCargo />
                <LeaveAComment />
                <ContactInformation />
                <PaymentBlock />
              </div>
              <div className="lg:hidden">
                <button
                  type="button"
                  disabled={!isValid}
                  onClick={() => {
                    if (isValid) {
                      window.location.href = "/checkout/order-sidebar";
                    }
                  }}
                  className={`px-4 py-3 rounded-full shadow-lg font-semibold w-full transition-all ${
                    isValid
                      ? "bg-pink-600 text-white"
                      : "bg-gray-300 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </div>

              <div className="hidden lg:block">
                <OrderSidebar pricePerKm={15} routePoints={routePoints} />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
      <Footer />
    </>
  );
};

export default CheckoutPage;
