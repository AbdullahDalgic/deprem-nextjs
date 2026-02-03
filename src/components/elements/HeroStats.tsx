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
      icon: <RiEarthquakeLine className="text-3xl md:text-4xl" />,
      value: last24Hours,
      label: "Son 24 Saat",
      color: "text-red-300 dark:text-red-400",
      accentColor: "from-red-500/30 to-red-600/20",
    },
    {
      icon: <TbWaveSawTool className="text-3xl md:text-4xl" />,
      value: largestEarthquake?.magnitude || 0,
      label: "En Büyük Deprem",
      color: "text-orange-300 dark:text-orange-400",
      accentColor: "from-orange-500/30 to-orange-600/20",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl md:text-4xl" />,
      value: largestEarthquake?.location || "-",
      label: "Konum",
      color: "text-blue-300 dark:text-blue-400",
      accentColor: "from-blue-500/30 to-blue-600/20",
      isLocation: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative rounded-2xl p-6 md:p-8 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/15 dark:hover:bg-white/10 overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.accentColor} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
          
          {/* Content */}
          <div className="relative flex items-start justify-between z-10">
            <div className="flex-1">
              <div className={`${stat.color} mb-3 drop-shadow-lg`}>{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                {stat.isLocation ? (
                  <span className="text-lg md:text-xl font-semibold line-clamp-2">{stat.value}</span>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm md:text-base text-white/90 dark:text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      ))}
    </div>
  );
}
