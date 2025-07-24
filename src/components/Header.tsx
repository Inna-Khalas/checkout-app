"use client";

import Image from "next/image";
import { Grid2x2, Plus, Search, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white drop-shadow-md border-gray-100 rounded-b-2xl border-1 px-4 py-3 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-4">
            <Image src="/Group.svg" alt="Tentai" width={36} height={36} />
            <button className="hidden md:flex items-center gap-1 text-sm text-pink-600 font-medium">
              <Grid2x2 className="w-4 h-4" />
              All categories
            </button>
          </div>

          <button className="md:hidden text-pink-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full md:flex-1 md:max-w-lg relative mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search in Tentai"
            className="w-full border rounded-full pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
            <Image src="/present.svg" alt="present" width={24} height={24} />{" "}
            Give prizes
          </button>

          <div className="relative flex items-center">
            <Image src="/message.svg" alt="message" height={24} width={24} />
            <span className="absolute -top-1.5 -right-3 bg-orange-500 text-white text-[8px] leading-tight rounded-full px-[4px] py-[1px] font-bold">
              99+
            </span>
          </div>

          <div className="relative flex items-center">
            <Image src="/c.svg" alt="c" width={24} height={24} />
            <span className="absolute -top-1.5 -right-3 bg-orange-500 text-white text-[8px] leading-tight rounded-full px-[4px] py-[1px] font-bold">
              99+
            </span>
          </div>

          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-pink-500">
            <Image
              src="/avatar.jpeg"
              alt="User Avatar"
              width={42}
              height={42}
              className="object-cover"
            />
          </div>

          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-pink-300 font-semibold text-sm px-4 py-2 rounded-md flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add offer
          </button>
        </div>
      </div>
    </header>
  );
};
