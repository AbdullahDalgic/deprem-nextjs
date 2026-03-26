"use client";

import React from "react";

export default function LogoutButton() {
  const handleLogout = () => {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.href = "/auth/login";
  };

  return (
    <button 
      onClick={handleLogout}
      className="w-full px-4 py-2 bg-red-900/30 text-red-400 hover:bg-red-900/50 rounded-lg transition-colors text-sm"
    >
      Çıkış Yap
    </button>
  );
}
