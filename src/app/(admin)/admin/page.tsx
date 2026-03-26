"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGetDashboard } from "@/utils/endpoints/dashboard";
import { 
  HiOutlineDeviceMobile, 
  HiOutlineGlobeAlt, 
  HiOutlineDownload, 
  HiOutlineChartBar 
} from "react-icons/hi";

export default function AdminDashboard() {
  const { data: dashboard, isLoading } = useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: async () => {
      const res = await apiGetDashboard();
      return res.data;
    },
  });

  const totalDevices = dashboard?.groupByBrand.reduce((acc, curr) => acc + curr.count, 0) || 0;
  const topCountry = dashboard?.groupByCountry[0]?.country || "-";

  if (isLoading) return <div className="p-8">İstatistikler Yükleniyor...</div>;

  return (
    <div className="space-y-8">
      {/* Mini Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Toplam Cihaz" 
          value={totalDevices.toLocaleString()} 
          icon={<HiOutlineDeviceMobile size={24} />} 
          color="blue"
        />
        <StatCard 
          title="En Popüler Ülke" 
          value={topCountry} 
          icon={<HiOutlineGlobeAlt size={24} />} 
          color="green"
        />
        <StatCard 
          title="Son 30 Gün İndirme" 
          value={dashboard?.downloadByDaily.reduce((acc, curr) => acc + curr.count, 0) || 0} 
          icon={<HiOutlineDownload size={24} />} 
          color="purple"
        />
        <StatCard 
          title="Popüler Marka" 
          value={dashboard?.groupByBrand[0]?.device_brand || "-"} 
          icon={<HiOutlineChartBar size={24} />} 
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Device Types Chart/List */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Cihaz Tipleri Dağılımı</h3>
          <div className="space-y-4">
            {dashboard?.groupByDeviceType.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 capitalize">{item.device_type || "Bilinmiyor"}</span>
                  <span className="text-slate-400">{item.count}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full" 
                    style={{ width: `${(item.count / totalDevices) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Countries */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">En Çok Kullanılan Ülkeler</h3>
          <div className="space-y-4">
             {dashboard?.groupByCountry.slice(0, 5).map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-400">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-700">{item.country || "Bilinmiyor"}</span>
                </div>
                <span className="text-blue-600 font-bold">{item.count} Cihaz</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: any) {
  const colors: any = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-2xl font-black text-slate-800 tracking-tight">{value}</p>
      </div>
    </div>
  );
}
