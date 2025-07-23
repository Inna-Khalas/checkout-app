"use client";

import { CheckoutFormValues } from "@/app/checkout/page";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

export const AboutTheCargo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>();

  return (
    <div className="mt-6 space-y-5">
      <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
        <Image src="/Vector.svg" alt="vector" width={9} height={16} />
        About the cargo
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-500 text-sm font-medium mb-1">
            Date of upload <span className="text-pink-500">*</span>
          </label>
          <input type="date" {...register("date")} className="input" />
          {errors.date && (
            <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-500 font-medium mb-1">
            Time of arrival <span className="text-pink-500">*</span>
          </label>
          <input type="time" {...register("time")} className="input" />
          {errors.time && (
            <p className="text-sm text-red-500 mt-1">{errors.time.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-500 font-medium mb-1">
            Cargo weight (kg)
          </label>
          <input
            type="number"
            {...register("weight")}
            className="input text-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 font-medium mb-1">
            Type of cargo <span className="text-pink-500">*</span>
          </label>
          <select {...register("cargoType")} className="input text-gray-300">
            <option value="">Select type</option>
            <option value="fragile">Fragile</option>
            <option value="liquid">Liquid</option>
            <option value="bulk">Bulk</option>
            <option value="documents">Documents</option>
          </select>
          {errors.cargoType && (
            <p className="text-sm text-red-500 mt-1">
              {errors.cargoType.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Cargo size of the LWH (m)
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Length"
              {...register("size.length")}
              className="border border-gray-300 text-gray-400 rounded-md px-3 py-2 text-sm w-full sm:w-[120px] focus:outline-none focus:ring-1 focus:ring-pink-200"
            />
            <span className="text-xl text-gray-400">×</span>
            <input
              type="number"
              placeholder="Width"
              {...register("size.width")}
              className="border border-gray-300 text-gray-400 rounded-md px-3 py-2 text-sm w-full sm:w-[120px] focus:outline-none focus:ring-1 focus:ring-pink-200"
            />
            <span className="text-xl text-gray-400">×</span>
            <input
              type="number"
              placeholder="Height"
              {...register("size.height")}
              className="border border-gray-300 text-gray-400 rounded-md px-3 py-2 text-sm w-full sm:w-[120px] focus:outline-none focus:ring-1 focus:ring-pink-200"
            />
            <select
              {...register("size.unit")}
              className="border border-gray-300 text-gray-400 rounded-md px-2 py-2 text-sm w-full sm:w-[100px] focus:outline-none focus:ring-1 focus:ring-pink-200"
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="inch">inch</option>
              <option value="ft">ft</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <label className="text-sm font-medium text-gray-700">
          Forwarding service
        </label>
        <input
          type="checkbox"
          {...register("forwarding")}
          className="w-10 h-5 rounded-full appearance-none bg-gray-300 checked:bg-pink-500 relative before:content-[''] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-md before:absolute before:top-0 before:left-0 before:transition-all checked:before:translate-x-full"
        />
      </div>
    </div>
  );
};
