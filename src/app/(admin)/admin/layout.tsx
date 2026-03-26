import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import UserHeaderProfile from "@/components/admin/UserHeaderProfile";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-[72px] bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10">
          <div>
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Hoş Geldiniz, Admin</h2>
            <p className="text-xs text-slate-400 font-medium tracking-wide">BUGÜN: {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <UserHeaderProfile />
        </header>

        {/* Scrollable Page Content */}
        <main className="p-10 flex-1 w-full mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </main>

        <footer className="p-6 border-t border-slate-200 bg-white text-center">
          <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} Deprem Wiki Admin. Tüm Hakları Saklıdır.</p>
        </footer>
      </div>
    </div>
  );
}
