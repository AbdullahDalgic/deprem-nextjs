"use client";
import { Box, Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface IPagination {
  last_page: number;
  current_page: number;
  url: string;
}

const PaginationComponent = (props: IPagination) => {
  const [loading, setLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { last_page, url } = props;

  useEffect(() => {
    setLoading(true);
  }, []);

  const generateLinkUrl = (page: number | null) => {
    return `${url}${page === 1 ? "" : `&page=${page}`}`;
  };

  if (!loading) return null;

  return (
    <Box sx={{ marginTop: 2 }}>
      <Pagination
        count={last_page}
        page={page}
        color="primary"
        size="large"
        sx={{ display: "flex", justifyContent: "center" }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            href={generateLinkUrl(item.page)}
            defaultChecked={item.page === page}
          />
        )}
      />
    </Box>
  );
};

export default PaginationComponent;
