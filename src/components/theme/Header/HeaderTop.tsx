import React from "react";
import dayjs from "dayjs";
import { FaCalendarAlt } from "react-icons/fa";
import { APP_LINKS, APP_SOCIALS } from "@/utils/constants/links";
import ImageButton from "@/components/elements/ImageButton";

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-b border-gray-800 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-12 items-center py-2.5">
          <div className="col-span-6 sm:col-span-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary-400 dark:text-primary-500" />
              <span className="text-gray-200 dark:text-gray-300 text-sm sm:text-base font-medium">
                {dayjs().format("MMMM D, YYYY")}
              </span>
            </div>
          </div>

          <div className="hidden md:flex col-span-6 h-full justify-end items-center gap-3">
            {APP_SOCIALS.map((a, k) => (
              <ImageButton key={k} {...a} />
            ))}
            <div className="h-6 w-px bg-gray-700 dark:bg-gray-700" />
            {APP_LINKS.map((a, k) => (
              <ImageButton key={k} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
