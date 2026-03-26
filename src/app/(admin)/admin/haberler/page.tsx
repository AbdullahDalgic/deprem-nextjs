"use client";

import React, { useState } from "react";
import { INews } from "@/utils/interfaces/news";
import { LaravelPaginationType } from "@/utils/interfaces/api";
import dayjs from "dayjs";
import { CiLink } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import AdminModal from "@/components/admin/AdminModal";
import { generateNewsLink } from "@/utils/helpers/urls";
import { API_URL } from "@/utils/constants";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiGetNews, apiGetNewsDetail, apiImageJob, apiSendToInstagram } from "@/utils/endpoints/news";

export default function AdminHaberler() {
  const [page, setPage] = useState(1);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  // Haberleri Getir
  const { data: newsData, isLoading } = useQuery<LaravelPaginationType<INews>>({
    queryKey: ["admin", "news", page],
    queryFn: async () => {
      const response = await apiGetNews({ page });
      return response.data as any;
    },
  });

  // Haber Detayı
  const { data: detailData, isLoading: modalLoading } = useQuery({
    queryKey: ["admin", "news", "detail", selectedNewsId],
    queryFn: async () => {
      const res = await apiGetNewsDetail(selectedNewsId!);
      return res.data.data;
    },
    enabled: !!selectedNewsId,
  });
  const selectedNews = detailData as any;

  // Kapak Resmi Oluştur İşlemi
  const imageJobMutation = useMutation({
    mutationFn: (id: number) => apiImageJob(id),
    onSuccess: (res: any) => alert(res.data?.message || "Kapak resmi oluşturma kuyruğa eklendi."),
    onError: (error: any) => alert(error.response?.data?.message || "Bir hata oluştu."),
  });

  // Instagram Paylaşım İşlemi
  const instagramJobMutation = useMutation({
    mutationFn: (id: number) => apiSendToInstagram(id),
    onSuccess: (res: any) => alert(res.data?.message || "Instagram paylaşım kuyruğa eklendi."),
    onError: (error: any) => alert(error.response?.data?.message || "Bir hata oluştu."),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Haberler Yönetimi</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">ID / Deprem ID</th>
                <th className="px-6 py-4 font-medium">Görsel</th>
                <th className="px-6 py-4 font-medium">Başlık</th>
                <th className="px-6 py-4 font-medium">İzlenme</th>
                <th className="px-6 py-4 font-medium">Tarih</th>
                <th className="px-6 py-4 font-medium text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {isLoading ? (
                <tr><td colSpan={6} className="px-6 py-10 text-center">Yükleniyor...</td></tr>
              ) : newsData?.data?.map((news) => (
                <tr key={news.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-900">#{news.id}</span>
                    <br />
                    <span className="text-xs text-slate-400">D: {news.earthquake_id || news.earthquake?.id || "-"}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      <img src={`${API_URL}${news.image_map}`} className="w-8 h-8 rounded border border-slate-200 object-cover bg-slate-100" alt="Map" />
                      <img src={`${API_URL}${news.image}`} className="w-8 h-8 rounded border border-slate-200 object-cover bg-slate-100" alt="News" />
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-[300px] truncate">
                    <a href={generateNewsLink(news)} target="_blank" className="hover:text-blue-600 font-medium">{news.title}</a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold">{news.views}</span>
                  </td>
                  <td className="px-6 py-4 text-xs">{dayjs(news.created_at).format("DD.MM.YYYY HH:mm")}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <a href={generateNewsLink(news)} target="_blank" className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors border border-blue-100" title="Siteye Git"><CiLink size={18} /></a>
                      <button onClick={() => setSelectedNewsId(news.id)} className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200" title="Hızlı İşlemler"><HiViewGrid size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm">
          <span>Toplam {newsData?.meta?.total || 0} kayıt</span>
          <div className="flex gap-2">
            <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50">Önceki</button>
            <button disabled={page >= (newsData?.meta?.last_page || 1)} onClick={() => setPage(p => p + 1)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50">Sonraki</button>
          </div>
        </div>
      </div>

      <AdminModal isOpen={!!selectedNewsId} onClose={() => setSelectedNewsId(null)} title="Haber Detayları & Hızlı İşlemler">
        {modalLoading ? <p>Yükleniyor...</p> : selectedNews && (
          <div className="space-y-6">
            <div className="flex justify-around bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-2">Harita</p>
                <img src={`${API_URL}${selectedNews.image_map}`} className="w-32 h-32 rounded-lg border border-slate-200 bg-white" alt="Map" />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-2">Haber Resmi</p>
                <img src={`${API_URL}${selectedNews.image}`} className="w-32 h-32 rounded-lg border border-slate-200 bg-white" alt="News" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 text-lg mb-2">{selectedNews.title}</h4>
              <div className="text-slate-600 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar prose prose-sm" dangerouslySetInnerHTML={{ __html: selectedNews.content }} />
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h4 className="font-bold text-slate-800 mb-4">Otomatik İş Akışları</h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => imageJobMutation.mutate(selectedNews.earthquake_id)}
                  className="flex flex-col items-center gap-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
                  disabled={imageJobMutation.isPending}
                >
                  <FaRegImages className="text-blue-600" size={24} />
                  <span className="text-xs font-semibold text-slate-700">{imageJobMutation.isPending ? "Bekleyiniz..." : "Kapak Resmi Oluştur"}</span>
                </button>
                <button
                  onClick={() => instagramJobMutation.mutate(selectedNews.earthquake_id)}
                  className="flex flex-col items-center gap-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
                  disabled={instagramJobMutation.isPending}
                >
                  <RiInstagramFill className="text-pink-600" size={24} />
                  <span className="text-xs font-semibold text-slate-700">{instagramJobMutation.isPending ? "Bekleyiniz..." : "Instagram'da Paylaş"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
}
