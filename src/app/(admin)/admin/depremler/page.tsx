"use client";

import React, { useState } from "react";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { LaravelPaginationType } from "@/utils/interfaces/api";
import dayjs from "dayjs";
import { CiLink } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import AdminModal from "@/components/admin/AdminModal";
import { generateEarthquakeLink } from "@/utils/helpers/urls";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiGetEarthquake, apiGetEarthquakes } from "@/utils/endpoints/earthquake";
import { apiCreateIndex, apiCreateNews } from "@/utils/endpoints/news";

export default function AdminDepremler() {
  const [page, setPage] = useState(1);
  const [selectedEqId, setSelectedEqId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  // Depremleri Getir
  const { data: eqData, isLoading } = useQuery<LaravelPaginationType<IEarthquake>>({
    queryKey: ["admin", "earthquakes", page],
    queryFn: async () => {
      const response = await apiGetEarthquakes({ page });
      return response.data as any; // LaravelPaginationType tipini doğrula
    },
  });

  // Deprem Detayı
  const { data: detailData, isLoading: modalLoading } = useQuery({
    queryKey: ["admin", "earthquakes", "detail", selectedEqId],
    queryFn: async () => {
      const res = await apiGetEarthquake(selectedEqId!, { join: ["news"] });
      return res.data.data;
    },
    enabled: !!selectedEqId,
  });
  const selectedEarthquake = detailData as any;

  // Haber Oluşturma İşlemi
  const createNewsMutation = useMutation({
    mutationFn: (id: number) => apiCreateNews(id),
    onSuccess: () => {
      alert("Haber başarıyla oluşturuldu.");
      queryClient.invalidateQueries({ queryKey: ["admin", "earthquakes", "detail", selectedEqId] });
      queryClient.invalidateQueries({ queryKey: ["admin", "news"] });
    },
    onError: (error: any) => alert(error.response?.data?.message || "Haber oluşturulurken hata oluştu."),
  });

  // Indexleme İşlemi
  const indexNewsMutation = useMutation({
    mutationFn: (newsId: number) => apiCreateIndex(newsId),
    onSuccess: () => alert("Haberin indexlenme isteği gönderildi."),
    onError: (error: any) => alert(error.response?.data?.message || "İndexlenirken hata oluştu."),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Depremler Yönetimi</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">ID / News ID</th>
                <th className="px-6 py-4 font-medium">Konum</th>
                <th className="px-6 py-4 font-medium">Büyüklük</th>
                <th className="px-6 py-4 font-medium">Derinlik</th>
                <th className="px-6 py-4 font-medium">Tarih</th>
                <th className="px-6 py-4 font-medium">Kaynak</th>
                <th className="px-6 py-4 font-medium text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {isLoading ? (
                <tr><td colSpan={7} className="px-6 py-10 text-center">Yükleniyor...</td></tr>
              ) : eqData?.data?.map((eq) => (
                <tr key={eq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-900">#{eq.id}</span>
                    <br />
                    <span className="text-xs text-slate-400">N: {(eq as any).news_id || "-"}</span>
                  </td>
                  <td className="px-6 py-4 max-w-[200px] truncate">{eq.location}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${eq.magnitude >= 4 ? 'text-red-600' : 'text-slate-900'}`}>{eq.magnitude}</span>
                  </td>
                  <td className="px-6 py-4">{eq.depth} km</td>
                  <td className="px-6 py-4 text-xs">{dayjs(eq.eventDate).format("DD.MM.YYYY HH:mm:ss")}</td>
                  <td className="px-6 py-4 text-xs">{eq.provider}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                       <a href={generateEarthquakeLink(eq)} target="_blank" className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors border border-blue-100" title="Siteye Git"><CiLink size={18} /></a>
                      <button onClick={() => setSelectedEqId(eq.id)} className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200" title="Detaylar"><HiViewGrid size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm">
          <span>Toplam {eqData?.meta?.total || 0} kayıt</span>
          <div className="flex gap-2">
            <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50">Önceki</button>
            <button disabled={page >= (eqData?.meta?.last_page || 1)} onClick={() => setPage(p => p + 1)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50">Sonraki</button>
          </div>
        </div>
      </div>

      <AdminModal isOpen={!!selectedEqId} onClose={() => setSelectedEqId(null)} title="Deprem Detayları & Haber Yönetimi">
        {modalLoading ? <p>Yükleniyor...</p> : selectedEarthquake && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-slate-400 mb-1">Lokasyon</p>
                <p className="font-semibold text-slate-800">{selectedEarthquake.location}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-slate-400 mb-1">ID</p>
                <p className="font-semibold text-slate-800">#{selectedEarthquake.id}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-slate-400 mb-1">Büyüklük</p>
                <p className="font-semibold text-slate-800">{selectedEarthquake.magnitude}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-slate-400 mb-1">Tarih</p>
                <p className="font-semibold text-slate-800">{dayjs(selectedEarthquake.eventDate).format("DD.MM.YYYY HH:mm")}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h4 className="font-bold text-slate-800 mb-4">Hızlı İşlemler</h4>
              <div className="flex gap-4">
                {selectedEarthquake.news ? (
                  <div className="flex-1 p-4 bg-green-50 rounded-xl border border-green-100 text-green-700 text-center">
                    <p className="font-bold">Haber Yayında (ID: {selectedEarthquake.news.id})</p>
                    <button 
                      onClick={() => indexNewsMutation.mutate(selectedEarthquake.news!.id)}
                      className="mt-2 px-4 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors disabled:opacity-50"
                      disabled={indexNewsMutation.isPending}
                    >
                      {indexNewsMutation.isPending ? "İşlem yapılıyor..." : "Google İndex İsteği Gönder"}
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => createNewsMutation.mutate(selectedEarthquake.id)}
                    className="flex-1 p-6 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-900/20 disabled:opacity-50"
                    disabled={createNewsMutation.isPending}
                  >
                    {createNewsMutation.isPending ? "Haber Oluşturuluyor..." : "OTOMATİK HABER OLUŞTUR"}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
}
