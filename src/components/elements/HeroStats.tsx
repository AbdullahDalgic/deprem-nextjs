"use client";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { RiEarthquakeLine } from "react-icons/ri";
import { TbWaveSawTool } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import dayjs from "dayjs";

interface HeroStatsProps {
  earthquakes: IEarthquake[];
}

export default function HeroStats({ earthquakes }: HeroStatsProps) {
  // Bugünkü deprem sayısı
  const todayCount = earthquakes.filter((eq) =>
    dayjs(eq.eventDate).isSame(dayjs(), "day")
  ).length;

  // En büyük deprem
  const largestEarthquake = earthquakes.reduce((prev, current) =>
    current.magnitude > prev.magnitude ? current : prev
  );

  // Son 24 saatteki deprem sayısı
  const last24Hours = earthquakes.filter((eq) =>
    dayjs().diff(dayjs(eq.eventDate), "hour") <= 24
  ).length;

  const stats = [
    {
      icon: <RiEarthquakeLine className="text-3xl" />,
      value: last24Hours,
      label: "Son 24 Saat",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: <TbWaveSawTool className="text-3xl" />,
      value: largestEarthquake?.magnitude || 0,
      label: "En Büyük Deprem",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      value: largestEarthquake?.location || "-",
      label: "Konum",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      isLocation: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className={`${stat.color} mb-2`}>{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.isLocation ? (
                  <span className="text-base font-semibold line-clamp-2">{stat.value}</span>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
