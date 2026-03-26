"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineExternalLink,
  HiOutlineUsers,
  HiOutlineDeviceMobile
} from "react-icons/hi";
import LogoutButton from "./LogoutButton";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: HiOutlineHome },
  { name: "Depremler", href: "/admin/depremler", icon: HiOutlineGlobeAlt },
  { name: "Haberler", href: "/admin/haberler", icon: HiOutlineNewspaper },
  { name: "Cihazlar", href: "/admin/cihazlar", icon: HiOutlineDeviceMobile },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white flex flex-col z-40 border-r border-slate-800 shadow-2xl">
      <div className="p-8 flex items-center gap-3 border-b border-slate-800/50 bg-slate-950/20">
        <img
          src={`/assets/img/logo/w_logo.png`}
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
          className="w-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-500 tracking-tight">Deprem Wiki</h1>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest p-0 m-0">Admin Paneli</p>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4 ml-2">Menü</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
            >
              <item.icon size={22} className={isActive ? "text-white" : "text-slate-500 group-hover:text-white"} />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}

        <div className="pt-8 space-y-1.5 border-t border-slate-800/50 mt-8">
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4 ml-2">Sistem</p>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all group"
          >
            <HiOutlineExternalLink size={22} className="text-slate-500 group-hover:text-white" />
            <span className="font-medium text-sm">Siteye Dön</span>
          </Link>
        </div>
      </nav>

      <div className="p-6 bg-slate-950/20 border-t border-slate-800/50">
        <LogoutButton />
      </div>
    </aside>
  );
}
