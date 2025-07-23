"use client";

import { CheckoutFormValues } from "@/app/checkout/page";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

export const LeaveAComment = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>();

  const comment = watch("comment") || "";

  return (
    <div className="mt-6 space-y-2 ">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
          <Image src="/Vector.svg" alt="vector" width={9} height={16} />
          Leave a comment
        </h2>
        <span className="text-sm text-gray-500">{comment.length} / 4000</span>
      </div>

      <textarea
        {...register("comment")}
        placeholder="Placeholder"
        maxLength={4000}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-pink-200 h-32"
      />

      {errors.comment && (
        <p className="text-red-500 text-sm">{errors.comment.message}</p>
      )}
    </div>
  );
};
