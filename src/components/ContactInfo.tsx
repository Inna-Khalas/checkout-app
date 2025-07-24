"use client";

import { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { CheckoutFormValues } from "@/app/checkout/page";
import { Pencil } from "lucide-react";
import Image from "next/image";

export const ContactInformation = () => {
  const [editing, setEditing] = useState(false);
  const [isEditingValid, setIsEditingValid] = useState(false);

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
    setValue,
    control,
  } = useFormContext<CheckoutFormValues>();

  const defaultValues = {
    name: "Marvin McKinney",
    email: "example@mail.com",
    phone: "+66123456789",
  };

  const values = getValues();
  const displayValues = {
    name: values.name || defaultValues.name,
    email: values.email || defaultValues.email,
    phone: values.phone || defaultValues.phone,
  };

  const [watchedName, watchedEmail, watchedPhone] = useWatch({
    control,
    name: ["name", "email", "phone"],
  });

  useEffect(() => {
    const validate = async () => {
      const valid = await trigger(["name", "email", "phone"]);
      setIsEditingValid(valid);
    };
    validate();
  }, [watchedName, watchedEmail, watchedPhone, trigger]);

  const handleStartEditing = async () => {
    setValue("name", displayValues.name);
    setValue("email", displayValues.email);
    setValue("phone", displayValues.phone);
    setEditing(true);
  };

  return (
    <div className="mt-6">
      <h2 className="text-base font-semibold flex items-center gap-1 mb-4 text-gray-800">
        <Image src="/Vector.svg" alt="vector" width={9} height={16} />
        Contact information
      </h2>

      {editing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              {...register("name")}
              className="input"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
              className="input"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="input"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="button"
            disabled={!isEditingValid}
            onClick={() => setEditing(false)}
            className={`sm:col-span-2 py-2 px-4 rounded-md font-medium mt-2 w-full sm:w-auto transition-all ${
              isEditingValid
                ? "bg-pink-600 text-white hover:bg-pink-700"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl px-5 py-4 relative text-sm">
          <div className="grid sm:grid-cols-[150px_1fr] grid-cols-1 gap-y-3 gap-x-4">
            <div className="text-gray-500">Full name</div>
            <div className="font-medium text-gray-900 break-words">
              {displayValues.name}
            </div>

            <div className="text-gray-500">Email</div>
            <div className="font-medium text-gray-900 break-words">
              {displayValues.email}
            </div>

            <div className="text-gray-500">Phone number</div>
            <div className="font-medium text-gray-900 break-words">
              {displayValues.phone}
            </div>
          </div>

          <button
            type="button"
            onClick={handleStartEditing}
            className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1.5 text-sm rounded-md flex items-center gap-1 shadow-sm hover:bg-pink-700"
          >
            <Pencil size={14} />
            <span className="hidden sm:inline">Edit</span>
          </button>
        </div>
      )}
    </div>
  );
};
