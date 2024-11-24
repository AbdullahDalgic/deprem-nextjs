"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import dayjs from "dayjs";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { generateEarthquakeLink } from "@/utils/helpers/urls";
import { TbWaveSawTool } from "react-icons/tb";
import { RiEarthquakeLine } from "react-icons/ri";

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
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("eventDate");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const isMobile = useMediaQuery("(max-width:600px)");

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
      <TableHead>
        <TableRow>
          {headCells.map((headCell, index) => (
            <TableCell
              key={index}
              align={headCell.id === "location" ? "left" : "right"}
            >
              <TableSortLabel
                active={props.orderBy === headCell.id}
                direction={props.orderBy === headCell.id ? props.order : "asc"}
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
              >
                <strong>{headCell.label}</strong>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const handleChangePage = (event: any, newPage: any) => setPage(newPage);
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      {isMobile ? (
        // Mobil tasarım: her deprem bilgisi kart olarak gösteriliyor
        <Box p={2}>
          {rows.map((row, index) => (
            <Box
              key={index}
              mb={2}
              p={2}
              border={1}
              borderColor="grey.300"
              borderRadius={2}
            >
              <Typography variant="h6" fontSize={15}>
                <Link
                  href={generateEarthquakeLink(row as IEarthquake)}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  title="Detaylar"
                >
                  <FaLink /> {row.location}
                </Link>
              </Typography>
              <Typography>🔴 Büyüklük: {row.magnitude}</Typography>
              <Typography>🔴 Derinlik: {row.depth} km</Typography>
              <Typography>
                🔴 Tarih: {dayjs(row.eventDate).format("DD MMMM YYYY - HH:mm")}
              </Typography>
            </Box>
          ))}
          {pagination && (
            <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage=""
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} / Toplam ${count}`
              }
            />
          )}
        </Box>
      ) : (
        // Masaüstü tasarım: standart tablo görünümü
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="small">
            <EnhancedTableHead order={order} orderBy={orderBy} />
            <TableBody>
              {rows.map((row, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell>
                    <Link
                      href={generateEarthquakeLink(row as IEarthquake)}
                      style={{ display: "flex", gap: "10px" }}
                      title="Detaylar"
                    >
                      <FaLink /> {row.location}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{row.magnitude}</TableCell>
                  <TableCell align="right">{row.depth} km</TableCell>
                  <TableCell align="right">
                    {dayjs(row.eventDate).format("DD MMMM YYYY - HH:mm")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {pagination && (
            <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Gösterilen"
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} / Toplam ${count}`
              }
              sx={{
                marginTop: "10px",
              }}
            />
          )}
        </TableContainer>
      )}
    </Paper>
  );
}
