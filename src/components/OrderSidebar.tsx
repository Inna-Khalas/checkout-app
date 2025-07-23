"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getRouteDistance } from "@/utils/getRouteDistance";
import { useFormContext } from "react-hook-form";
import { CheckoutFormValues } from "@/app/checkout/page";
import { MapPin } from "lucide-react";

interface Props {
  pricePerKm: number;
  routePoints: string[];
}

export const OrderSidebar = ({ pricePerKm, routePoints }: Props) => {
  const {
    watch,
    setValue,
    register,
    formState: { isValid },
  } = useFormContext<CheckoutFormValues>();

  const useCustomPrice = watch("useCustomPrice");
  const customPrice = watch("customPrice") || "";
  const forwarding = watch("forwarding");
  const points = watch("points") || [];

  const [distanceKm, setDistanceKm] = useState(0);
  const [loading, setLoading] = useState(false);

  const forwardingPrice = forwarding ? 250 : 0;
  const commission = 35;
  const routeCost = 500;

  const dynamicPayment = distanceKm * pricePerKm;

  const total =
    (useCustomPrice ? Number(customPrice || 0) : dynamicPayment) +
    forwardingPrice +
    commission +
    routeCost;

  useEffect(() => {
    const fetchDistance = async () => {
      const validPoints = routePoints.filter((p) => p.trim().length > 0);

      if (validPoints.length >= 2) {
        try {
          setLoading(true);
          const km = await getRouteDistance(validPoints);
          setDistanceKm(km);
        } catch (e) {
          console.error("Error fetching distance", e);
        } finally {
          setLoading(false);
        }
      } else {
        setDistanceKm(0);
      }
    };

    fetchDistance();
  }, [routePoints]);

  return (
    <aside className="bg-white rounded-xl p-4 shadow space-y-4 h-fit max-w-[360px] border border-gray-200 text-sm">
      <h2 className="text-base font-semibold flex items-center gap-1 text-black mb-1">
        <Image src="/Vector.svg" alt="vector" width={9} height={16} />
        Order
      </h2>

      <div className="rounded-xl border border-gray-300">
        <div className="p-3 flex gap-3">
          <div className="relative w-[130px] h-[100px] flex-shrink-0">
            <Image
              src="/truck.jpg"
              alt="Truck"
              fill
              className="rounded-md object-cover"
            />
            <div className="absolute top-1 right-1 text-[10px] bg-orange-500 text-white rounded px-2 py-0.5 font-bold uppercase shadow">
              Top Seller
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm text-gray-700 leading-tight">
              Ecological cleaning and maintenance services for home
            </h3>
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <MapPin size={12} className="text-orange-500" />
              <span className="text-[11px]">Bangkok</span> • ⚡ 5.0
            </div>
            <div className="text-sm text-orange-600 font-bold mt-1">
              {useCustomPrice
                ? `${customPrice} THB`
                : `${dynamicPayment.toFixed(0)} THB`}
            </div>
          </div>
        </div>

        {points.length > 0 && (
          <div className="border border-pink-400 rounded-md text-sm text-pink-700 p-3 space-y-2">
            {points.map((p, idx) => (
              <div key={idx}>
                <div className="font-medium text-xs text-gray-600">
                  Point {String.fromCharCode(65 + idx)}
                </div>
                <div className="text-[13px] text-pink-700 font-semibold">
                  {p.location}
                  {p.time ? `, ${p.time}` : ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-sm space-y-1 text-gray-700">
        <div className="flex justify-between">
          <span>Loading and unloading route</span>
          <span>{routeCost} THB</span>
        </div>
        {forwarding && (
          <div className="flex justify-between">
            <span>Forwarding services</span>
            <span>{forwardingPrice} THB</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Payment</span>
          <span>
            {useCustomPrice
              ? `${customPrice} THB`
              : `${dynamicPayment.toFixed(0)} THB`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Service commission</span>
          <span>{commission} TBH</span>
        </div>

        {!useCustomPrice && distanceKm > 0 && (
          <div className="flex justify-between text-xs text-gray-500">
            <span>Distance</span>
            <span>{distanceKm.toFixed(1)} km</span>
          </div>
        )}

        <div className="flex justify-between text-orange-600 font-bold border-t pt-2 mt-2">
          <span>Total price</span>
          <span>{total.toFixed(0)} TBH</span>
        </div>
      </div>

      <div className="border rounded-lg p-3 text-sm space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("useCustomPrice")}
            onChange={(e) => setValue("useCustomPrice", e.target.checked)}
            className="accent-pink-600"
          />
          <span className="font-medium">Alternative price</span>
        </label>
        <p className="text-gray-500 text-xs leading-snug">
          Set your price for a service or product and find the best deal for
          your budget.
        </p>
        {useCustomPrice && (
          <input
            type="number"
            {...register("customPrice")}
            placeholder="Enter your price"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-pink-500 focus:border-pink-500"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-3 rounded-xl font-semibold transition text-white ${
          isValid
            ? "bg-pink-600 hover:bg-pink-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Order
      </button>
    </aside>
  );
};
