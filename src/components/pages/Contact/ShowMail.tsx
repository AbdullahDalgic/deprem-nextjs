"use client";
import React, { useState } from "react";

const ShowMail = () => {
  const mail = "info@deprem.wiki";
  const [showMail, setShowMail] = useState(false);

  return (
    <span className="cursor-pointer" onClick={() => setShowMail(!showMail)}>
      {showMail ? mail : "Mail adresini görmek için tıklayın."}
    </span>
  );
};

export default ShowMail;
