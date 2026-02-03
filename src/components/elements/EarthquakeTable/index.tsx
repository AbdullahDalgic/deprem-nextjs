"use client";
import * as React from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import dayjs from "dayjs";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { generateEarthquakeLink } from "@/utils/helpers/urls";

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

interface IEarthquakeTable {
  earthquakes: IEarthquake[];
  pagination: boolean;
}

export default function EarthquakeTable({
  earthquakes,
  pagination,
}: IEarthquakeTable) {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("eventDate");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50); // Daha fazla veri gösterimi için varsayılan değer artırıldı
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const data = useMemo(() => {
    return earthquakes.map((earthquake) => {
      return {
        eventId: earthquake.eventId,
        eventDate: earthquake.eventDate,
        location: earthquake.location,
        magnitude: earthquake.magnitude,
        depth: earthquake.depth,
      };
    });
  }, [earthquakes]);

  const rows = useMemo(() => {
    return data
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [data, order, orderBy, page, rowsPerPage]);

  const headCells = [
    { id: "location", label: "Konum" },
    { id: "magnitude", label: "Büyüklük" },
    { id: "depth", label: "Derinlik" },
    { id: "eventDate", label: "Tarih" },
  ];

  function EnhancedTableHead(props: any) {
    return (
      <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <tr>
          {headCells.map((headCell, index) => (
            <th
              key={index}
              className={`px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ${
                headCell.id === "location" ? "text-left" : "text-right"
              }`}
            >
              <button
                onClick={() => {
                  setOrderBy(headCell.id);
                  setOrder(
                    props.orderBy === headCell.id
                      ? props.order === "asc"
                        ? "desc"
                        : "asc"
                      : "asc"
                  );
                }}
                className="flex items-center gap-1.5 hover:text-primary transition-colors group w-full"
                style={{ justifyContent: headCell.id === "location" ? "flex-start" : "flex-end" }}
              >
                <span>{headCell.label}</span>
                {props.orderBy === headCell.id ? (
                  <span className={`text-primary text-xs ${props.order === "asc" ? "rotate-180" : ""} transition-transform`}>
                    <i className="fas fa-sort-up"></i>
                  </span>
                ) : (
                  <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                    <i className="fas fa-sort"></i>
                  </span>
                )}
              </button>
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  const handleChangePage = (newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = page * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, data.length);

  const getMagnitudeColor = (magnitude: number) => {
    if (magnitude >= 6.0) return "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800";
    if (magnitude >= 5.0) return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50";
    if (magnitude >= 4.0) return "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/50";
    if (magnitude >= 3.0) return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/50";
    return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50";
  };

  const getMagnitudeSize = (magnitude: number) => {
    if (magnitude >= 5.0) return "text-base font-extrabold px-3 py-1";
    if (magnitude >= 4.0) return "text-sm font-bold px-2.5 py-0.5";
    return "text-sm font-semibold px-2 py-0.5";
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {isMobile ? (
        // Mobil tasarım: kompakt liste görünümü
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {rows.map((row, index) => (
            <Link
              key={index}
              href={generateEarthquakeLink(row as IEarthquake)}
              className="block px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1 h-1 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"></div>
                    <h6 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">
                      {row.location}
                    </h6>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 ml-3">
                    <span>{row.depth} km</span>
                    <span>•</span>
                    <span>{dayjs(row.eventDate).format("DD MMM YYYY")}</span>
                    <span>•</span>
                    <span>{dayjs(row.eventDate).format("HH:mm")}</span>
                  </div>
                </div>
                <div className={`inline-flex items-center justify-center rounded-md font-bold ${getMagnitudeColor(row.magnitude)} ${getMagnitudeSize(row.magnitude)} flex-shrink-0`}>
                  {row.magnitude}
                </div>
              </div>
            </Link>
          ))}
          {pagination && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-semibold">{startIndex + 1}-{endIndex}</span> / <span className="text-gray-900 dark:text-white font-semibold">{data.length}</span> deprem
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Sayfa başına:</span>
                  <select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                    className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium hover:border-primary transition-colors cursor-pointer"
                  >
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleChangePage(page - 1)}
                    disabled={page === 0}
                    className="px-3 py-1.5 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary transition-all"
                    title="Önceki sayfa"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md">
                    {page + 1} / {totalPages}
                  </div>
                  <button
                    onClick={() => handleChangePage(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="px-3 py-1.5 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary transition-all"
                    title="Sonraki sayfa"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Masaüstü tasarım: kompakt ve ince tablo görünümü
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
            <EnhancedTableHead order={order} orderBy={orderBy} />
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  <td className="px-4 py-2">
                    <Link
                      href={generateEarthquakeLink(row as IEarthquake)}
                      className="flex items-center gap-2 text-sm text-gray-900 dark:text-white hover:text-primary transition-colors font-medium"
                      title="Detaylar"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all flex-shrink-0"></div>
                      <span className="truncate max-w-md">{row.location}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <span className={`inline-flex items-center justify-center rounded-md font-bold ${getMagnitudeColor(row.magnitude)} ${getMagnitudeSize(row.magnitude)}`}>
                      {row.magnitude}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-xs text-right text-gray-600 dark:text-gray-400 font-medium">
                    {row.depth} km
                  </td>
                  <td className="px-4 py-2 text-xs text-right text-gray-600 dark:text-gray-400">
                    <div className="font-medium">{dayjs(row.eventDate).format("DD MMM YYYY")}</div>
                    <div className="text-gray-500 dark:text-gray-500 mt-0.5">
                      {dayjs(row.eventDate).format("HH:mm")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pagination && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-semibold">{startIndex + 1}-{endIndex}</span> / <span className="text-gray-900 dark:text-white font-semibold">{data.length}</span> deprem
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Sayfa başına:</span>
                  <select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                    className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-medium hover:border-primary transition-colors cursor-pointer"
                  >
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleChangePage(page - 1)}
                    disabled={page === 0}
                    className="px-3 py-1.5 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary transition-all"
                    title="Önceki sayfa"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md">
                    {page + 1} / {totalPages}
                  </div>
                  <button
                    onClick={() => handleChangePage(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="px-3 py-1.5 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary transition-all"
                    title="Sonraki sayfa"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
