"use client";
import { Wallet } from "lucide-react";
import Image from "next/image";

export const PaymentBlock = () => {
  return (
    <div className="mt-6">
      <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1 mb-4">
        <Image src="/Vector.svg" alt="vector" width={9} height={16} />
        Payment
      </h2>

      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Wallet className="w-5 h-5 text-gray-800" />
        </div>

        <div>
          <h3 className="text-base  text-gray-700 mb-1">Payment on receipt</h3>
          <p className="text-sm text-gray-500 leading-snug max-w-lg">
            Avoid online transactions and pay only when you receive your order.
            This will guarantee your financial security and avoid any risks
            associated with electronic payments.
          </p>
        </div>
      </div>
    </div>
  );
};
