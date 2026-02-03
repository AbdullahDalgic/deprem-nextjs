"use client";
import React, { useState } from "react";
import { RiMailLine } from "react-icons/ri";

const ShowMail = () => {
  const mail = "info@deprem.wiki";
  const [showMail, setShowMail] = useState(false);

  return (
    <button
      onClick={() => setShowMail(!showMail)}
      className="inline-flex items-center gap-2 text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors cursor-pointer"
    >
      {showMail ? (
        <>
          <RiMailLine className="text-lg" />
          <span>{mail}</span>
        </>
      ) : (
        <span className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          Mail adresini görmek için tıklayın
        </span>
      )}
    </button>
  );
};

export default ShowMail;
