import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { FaGoogle, FaYandexInternational } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { IEarthquake } from "@/utils/interfaces/earthquakes";

interface IEarthquakeDetailTableMini {
  earthquake?: IEarthquake;
}

const EarthquakeDetailTableMini = ({
  earthquake,
}: IEarthquakeDetailTableMini) => {
  if (!earthquake) return null;

  const getMagnitudeColor = (magnitude: number) => {
    if (magnitude >= 5.0) return "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400";
    if (magnitude >= 4.0) return "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400";
    return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400";
  };

  const mapLinks = [
    {
      href: `https://www.google.com/maps/search/?api=1&query=${earthquake.lat},${earthquake.lng}`,
      icon: FaGoogle,
      label: "Google Maps'te Göster",
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      href: `https://yandex.com.tr/maps/?ll=${earthquake.lng},${earthquake.lat}&z=7`,
      icon: FaYandexInternational,
      label: "Yandex Maps'te Göster",
      color: "hover:bg-red-500 hover:text-white",
    },
    {
      href: `https://www.openstreetmap.org/?mlat=${earthquake.lat}&mlon=${earthquake.lng}&zoom=7`,
      icon: SiOpenstreetmap,
      label: "OpenStreetMap'te Göster",
      color: "hover:bg-green-500 hover:text-white",
    },
  ];

  const details = [
    { label: "Deprem Büyüklüğü", value: earthquake.magnitude, isMagnitude: true },
    { label: "Deprem Derinliği", value: `${earthquake.depth} km` },
    { label: "Deprem Lokasyonu", value: earthquake.location },
    { label: "Deprem Tarihi", value: dayjs(earthquake.eventDate).format("DD MMMM YYYY") },
    { label: "Deprem Saati", value: dayjs(earthquake.eventDate).format("HH:mm") },
    { label: "Kaynak", value: earthquake.provider },
    { label: "Enlem", value: earthquake.lat },
    { label: "Boylam", value: earthquake.lng },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {details.map((detail, index) => (
          <div key={index} className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
            <dt className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              {detail.label}
            </dt>
            <dd className="text-sm font-medium text-gray-900 dark:text-white sm:text-right">
              {detail.isMagnitude ? (
                <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg font-bold text-base ${getMagnitudeColor(detail.value as number)}`}>
                  {detail.value}
                </span>
              ) : (
                <span className="text-gray-900 dark:text-white">{detail.value}</span>
              )}
            </dd>
          </div>
        ))}
        <div className="px-5 py-3.5 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <dt className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Haritada Göster
            </dt>
            <dd className="flex items-center gap-2">
              {mapLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer nofollow"
                  title={link.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-all duration-200 ${link.color} cursor-pointer shadow-sm hover:shadow-md hover:scale-105`}
                >
                  <link.icon className="text-sm" />
                </Link>
              ))}
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeDetailTableMini;
