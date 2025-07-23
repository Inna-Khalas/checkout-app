"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CheckoutFormValues } from "../page";
import { OrderSidebar } from "@/components/OrderSidebar";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const OrderSidebarMobilePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<CheckoutFormValues>({
    defaultValues: {
      points: [],
      forwarding: false,
      comment: "",
      useCustomPrice: false,
      customPrice: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("checkout");

    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        methods.reset(parsed);
      } catch (e) {
        console.error("Invalid localStorage data");
      }
    }

    setIsLoading(false);
  }, [methods]);

  const routePoints = methods.watch("points")?.map((p) => p.location) || [];

  if (isLoading) return <p>...loading</p>;

  return (
    <div className="p-4 bg-white min-h-screen">
      <button
        onClick={() => router.push("/checkout")}
        className="mb-4 flex items-center text-pink-600 font-medium text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <FormProvider {...methods}>
        <OrderSidebar routePoints={routePoints} pricePerKm={15} />
      </FormProvider>
    </div>
  );
};

export default OrderSidebarMobilePage;
