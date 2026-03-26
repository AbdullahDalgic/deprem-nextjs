"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGetDevices, Device } from "@/utils/endpoints/device";
import { LaravelPaginationType } from "@/utils/interfaces/api";
import dayjs from "dayjs";
import { HiOutlineDeviceMobile, HiOutlineGlobeAlt, HiOutlineInformationCircle } from "react-icons/hi";

export default function AdminCihazlar() {
  const [page, setPage] = useState(1);

  const { data: deviceData, isLoading } = useQuery<LaravelPaginationType<Device>>({
    queryKey: ["admin", "devices", page],
    queryFn: async () => {
      const res = await apiGetDevices({ page });
      return res.data;
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Cihaz Yönetimi</h1>
          <p className="text-slate-400 text-sm mt-1">Uygulamayı kullanan kayıtlı mobil cihazlar.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-8 py-4">Sistem & Model</th>
                <th className="px-8 py-4">Versiyon</th>
                <th className="px-8 py-4">Lokasyon</th>
                <th className="px-8 py-4">Kayıt Tarihi</th>
                <th className="px-8 py-4 text-center">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
              {isLoading ? (
                <tr><td colSpan={5} className="px-8 py-10 text-center text-slate-400">Yükleniyor...</td></tr>
              ) : deviceData?.data?.map((device, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                        <HiOutlineDeviceMobile size={22} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 capitalize">{(device as any).device_brand} {(device as any).device_model}</p>
                        <p className="text-xs text-slate-400">{(device as any).device_os} {(device as any).device_os_version}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase">v{(device as any).app_version}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-1.5">
                      <HiOutlineGlobeAlt className="text-slate-300" />
                      <span className="font-medium text-slate-700">{(device as any).country || "-"}</span>
                      <span className="text-slate-400">/</span>
                      <span className="text-slate-500">{(device as any).city || "-"}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-400 text-xs">
                    {dayjs((device as any).created_at).format("DD.MM.YYYY HH:mm")}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex justify-center">
                       <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100">AKTİF</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>{deviceData?.meta?.total || 0} KAYIT BULUNDU</span>
          <div className="flex gap-2">
            <button 
              disabled={page <= 1} 
              onClick={() => setPage(p => p - 1)} 
              className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-sm"
            >
              ÖNCEKİ
            </button>
            <button 
              disabled={page >= (deviceData?.meta?.last_page || 1)} 
              onClick={() => setPage(p => p + 1)} 
              className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-sm"
            >
              SONRAKİ
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4 text-blue-700">
          <HiOutlineInformationCircle size={24} />
          <p className="text-sm font-medium">Bu cihazlar Firebase Cloud Messaging (FCM) üzerinden anlık bildirim almaktadır.</p>
      </div>
    </div>
  );
}
