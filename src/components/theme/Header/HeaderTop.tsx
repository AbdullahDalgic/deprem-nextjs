import React from "react";
import dayjs from "dayjs";
import { FaCalendarAlt } from "react-icons/fa";
import { APP_LINKS, APP_SOCIALS } from "@/utils/constants/links";
import ImageButton from "@/components/elements/ImageButton";

export default function HeaderTop() {
  return (
    <div className="w-full bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-12 items-center py-2">
          <div className="col-span-6 sm:col-span-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-pink-500" />
              <span className="text-white text-sm sm:text-base">
                {dayjs().format("MMMM D, YYYY")}
              </span>
            </div>
          </div>

          <div className="hidden md:flex col-span-6 h-full justify-end items-center gap-2">
            {APP_SOCIALS.map((a, k) => (
              <ImageButton key={k} {...a} />
            ))}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
            {APP_LINKS.map((a, k) => (
              <ImageButton key={k} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
