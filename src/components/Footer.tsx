"use client";

import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#FAF9FB] text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/Group.svg" alt="Tentai" width={36} height={36} />
              <div>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-base">
                  Tentai
                </div>
                <div className="text-[10px] text-orange-400 font-medium -mt-1">
                  World of shipping
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 leading-snug max-w-[180px]">
              © 2024 Tentai – Find it. Choose. Make life more convenient.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">
              Documents
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  User agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  More documents
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">
              Contacts
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>example@mail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+66123456789</span>
              </li>
            </ul>

            <div className="flex gap-2 mt-3 flex-wrap">
              <Image src="/inst.svg" alt="Instagram" width={24} height={24} />
              <Image src="/f.svg" alt="Facebook" width={24} height={24} />
              <Image src="/twitter.svg" alt="Telegram" width={24} height={24} />
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
              <Image src="/line.svg" alt="Line" width={24} height={24} />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                Download Tentai App
              </h3>
              <div className="flex gap-2">
                <Image src="/apple.svg" alt="Apple" width={28} height={28} />
                <Image src="/w.svg" alt="Google Play" width={28} height={28} />
                <Image src="/hua.svg" alt="Huawei" width={28} height={28} />
              </div>
            </div>

            <div className="relative w-full max-w-[120px]">
              <select className="border border-pink-500 text-pink-600 text-sm font-medium rounded-md px-3 py-2 bg-white appearance-none w-full pr-8">
                <option value="en">English</option>
                <option value="uk">Українська</option>
              </select>
              <Globe
                size={16}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-pink-500 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
