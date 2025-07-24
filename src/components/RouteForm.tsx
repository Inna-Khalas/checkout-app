"use client";
import React from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { CheckoutFormValues } from "@/app/checkout/page";
import Image from "next/image";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";

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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Location */}
              <div className="relative sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Point {String.fromCharCode(65 + index)}{" "}
                  <span className="text-pink-500">*</span>
                </label>

                <input
                  {...register(`points.${index}.location` as const)}
                  placeholder="Thailand, Phuket..."
                  className="input pl-4 pr-10 w-full"
                />

                <Image
                  src="/map.svg"
                  alt="map"
                  width={20}
                  height={20}
                  className="absolute right-2 top-10 -translate-y-1/2 pointer-events-none"
                />

                {errors.points?.[index]?.location && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.points[index]?.location?.message}
                  </p>
                )}
              </div>

              {/* Time with mask */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Operating time (hour) <span className="text-pink-500">*</span>
                </label>
                <Controller
                  control={control}
                  name={`points.${index}.time`}
                  render={({ field }) => (
                    <TimePicker
                      {...field}
                      onChange={(value) => field.onChange(value || "")}
                      value={field.value || ""}
                      format="HH:mm"
                      disableClock={true}
                      clearIcon={null}
                      clockIcon={null}
                      className="w-full"
                    />
                  )}
                />

                {errors.points?.[index]?.time && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.points[index]?.time?.message}
                  </p>
                )}
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
