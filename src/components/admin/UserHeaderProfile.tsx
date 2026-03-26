"use client";

import React, { useEffect, useState } from "react";
import { AuthUserType } from "@/utils/interfaces/auth";

export default function UserHeaderProfile() {
  const [userName, setUserName] = useState("Yönetici");

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        if (userData && userData.name) {
          setUserName(userData.name);
        }
      } catch (e) {
        console.error("User parse error", e);
      }
    }
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="text-right leading-tight">
        <p className="text-sm font-bold text-slate-800 p-0 m-0">{userName}</p>
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest p-0 m-0">Süper Admin</p>
      </div>
      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold shadow-sm">
        <span className="text-sm">{userName.charAt(0).toUpperCase()}</span>
      </div>
    </div>
  );
}
