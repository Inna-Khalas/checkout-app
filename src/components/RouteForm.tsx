"use client";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { CheckoutFormValues } from "@/app/checkout/page";
import Image from "next/image";

const pointLabels = [
  "Download location",
  "Place of unloading",
  "Additional point",
];

const RouteForm = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "points",
  });

  return (
    <div className="mb-6">
      <h2 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-1">
        <Image src="/Vector.svg" alt="vector" width={9} height={16} />
        Route
      </h2>

      <div className="space-y-3">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="relative bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              {pointLabels[index] || "Additional point"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Point {String.fromCharCode(65 + index)}{" "}
                  <span className="text-pink-500">*</span>
                </label>
                <input
                  {...register(`points.${index}.location` as const)}
                  placeholder="Thailand, Phuket, Rat Burana..."
                  className="input pl-10 w-full"
                />
                {errors.points?.[index]?.location && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.points[index]?.location?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Operating time (hour) <span className="text-pink-500">*</span>
                </label>
                <input
                  type="time"
                  {...register(`points.${index}.time` as const)}
                  className="input w-full"
                />
              </div>
            </div>

            {index >= 2 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-4 right-4 text-pink-600 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => append({ location: "", time: "" })}
        className="mt-4 text-sm font-medium text-pink-600 border border-pink-500 px-4 py-2 rounded-lg hover:bg-pink-50 w-full sm:w-auto"
      >
        + Add another point
      </button>
    </div>
  );
};

export default RouteForm;
