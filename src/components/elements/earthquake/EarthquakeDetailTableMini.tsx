import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
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

  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Deprem Büyüklüğü</strong>
            </TableCell>
            <TableCell>
              <strong>{earthquake.magnitude}</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Deprem Derinliği</strong>
            </TableCell>
            <TableCell>{`${earthquake.depth} km`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Deprem Lokasyonu</strong>
            </TableCell>
            <TableCell>{`${earthquake.location}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Deprem Tarihi</strong>
            </TableCell>
            <TableCell>
              {dayjs(earthquake.eventDate).format("DD MMMM YYYY")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Deprem Saati</strong>
            </TableCell>
            <TableCell>{dayjs(earthquake.eventDate).format("HH:mm")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Kaynak</strong>
            </TableCell>
            <TableCell>{earthquake.provider}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Enlem</strong>
            </TableCell>
            <TableCell>{earthquake.lat}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Boylam</strong>
            </TableCell>
            <TableCell>{earthquake.lng}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <strong>Haritada Göster</strong>
            </TableCell>
            <TableCell style={{ display: "flex", gap: 10 }}>
              {/* google */}
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${earthquake.lat},${earthquake.lng}`}
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Google Maps'te Göster"
                >
                  <FaGoogle />
                </a>
              </Link>

              {/* yandex */}
              <Link
                href={`https://yandex.com.tr/maps/?ll=${earthquake.lng},${earthquake.lat}&z=7`}
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Yandex Maps'te Göster"
                >
                  <FaYandexInternational />
                </a>
              </Link>

              {/* openstreetmap */}
              <Link
                href={`https://www.openstreetmap.org/?mlat=${earthquake.lat}&mlon=${earthquake.lng}&zoom=7`}
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="OpenStreetMap'te Göster"
                >
                  <SiOpenstreetmap />
                </a>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EarthquakeDetailTableMini;
