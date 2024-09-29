"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { useMemo } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import dayjs from "dayjs";

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

export default function EarthquakeTable({ earthquakes, pagination }: any) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const data = useMemo(() => {
    return earthquakes.map((earthquake: any) => {
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
  }, [earthquakes, order, orderBy, page, rowsPerPage]);

  const headCells = [
    {
      id: "location",
      numeric: false,
      disablePadding: false,
      label: "Konum",
    },
    {
      id: "magnitude",
      numeric: true,
      disablePadding: false,
      label: "Büyüklük",
    },
    {
      id: "depth",
      numeric: true,
      disablePadding: false,
      label: "Derinlik",
    },
    {
      id: "eventDate",
      numeric: true,
      disablePadding: false,
      label: "Tarih",
    },
  ];

  function EnhancedTableHead(props: any) {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell, index) => (
            <TableCell
              key={index}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              <TableSortLabel
                active={props.orderBy === headCell.id}
                direction={props.orderBy === headCell.id ? props.order : "asc"}
                onClick={(event) => {
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

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row: any, index: number) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell>
                    <Link
                      href={`/depremler/${dayjs(row.eventDate).format(
                        "YYYY-MM-DD"
                      )}/${row.eventId}`}
                      style={{
                        display: "flex",
                        width: "100%",
                        gap: "10px",
                      }}
                      title="Detaylar"
                    >
                      {row.location} <FaLink />
                    </Link>
                  </TableCell>
                  <TableCell align="right">{row.magnitude}</TableCell>
                  <TableCell align="right">{row.depth}</TableCell>
                  <TableCell align="right">
                    {dayjs(row.eventDate).format("DD MMMM YYYY")}
                    {" - "}
                    <strong>{dayjs(row.eventDate).format("HH:mm")}</strong>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination && (
          <TablePagination
            rowsPerPageOptions={[20, 50, 100, 200]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </>
  );
}
