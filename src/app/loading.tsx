import React from "react";
import { RiLoader4Line } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <RiLoader4Line className="w-12 h-12 text-primary animate-spin" />
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping"></div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          Yükleniyor...
        </p>
      </div>
    </div>
  );
};

export default Loading;
