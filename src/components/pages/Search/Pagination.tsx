"use client";
import { Box, Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IPagination {
  last_page: number;
  current_page: number;
  url: string;
}

const PaginationComponent = (props: IPagination) => {
  const { last_page, current_page, url } = props;

  return (
    <Box sx={{ marginTop: 2 }}>
      <Pagination
        count={last_page}
        page={current_page}
        color="primary"
        size="large"
        sx={{ display: "flex", justifyContent: "center" }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            {...item}
            href={`${url}${item.page === 1 ? "" : `?page=${item.page}`}`}
          />
        )}
      />
    </Box>
  );
};

export default PaginationComponent;
