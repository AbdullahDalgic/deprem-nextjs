"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { apiLogin } from "@/utils/endpoints/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await apiLogin({ email, password });

      if (data?.token) {
        // Token'ı çerezde sakla (1 saat)
        document.cookie = `auth-token=${data.token}; path=/; max-age=3600; SameSite=Lax`;
        
        // Kullanıcı bilgisini localStorage'da saklayabiliriz (isteğe bağlı)
        localStorage.setItem("user", JSON.stringify(data.user));

        router.push("/admin");
      } else {
        alert("Giriş başarısız: Sunucudan geçersiz yanıt alındı.");
      }
    } catch (error: any) {
      console.error("Giriş hatası:", error);
      alert(error.response?.data?.message || "Giriş yapılamadı. Bilgilerinizi kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Yönetici Girişi</h1>
        <p className="text-slate-400">Deprem Wiki Admin Paneli</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="admin@deprem.wiki"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="••••••••"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
