"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { APPS } from "@/utils/constants";

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("🚀 ~ useEffect ~ window:", window);
      const userAgent = navigator.userAgent;
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);

      if (isIOS) {
        window.location.href = APPS.apple;
        return;
      } else if (isAndroid) {
        window.location.href = APPS.android;
        return;
      }

      router.push("/apps");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-xl font-semibold">Yönlendiriliyorsunuz...</p>
    </div>
  );
}
