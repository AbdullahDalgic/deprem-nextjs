"use server";
import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { generateSearchLink } from "@/utils/helpers/urls";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { IPagination } from "@/utils/interfaces/pagination";
import SearchItem from "./SearchItem";
import PaginationComponent from "./Pagination";
import { headers } from "next/headers";

interface ISearchPage {
  data: IPagination<IEarthquake>;
}

const SearchPage = (props: ISearchPage) => {
  const { data, current_page, last_page }: IPagination<IEarthquake> =
    props.data || {};

  const headersList = headers();
  const referer = headersList.get("referer") || "";
  const q = new URL(referer).searchParams.get("q") || "";

  const terms = q.replace(/%2B/g, " ");
  const url = generateSearchLink(terms);

  return (
    <>
      <Breadcrumb
        breadcrumbCategory="Arama Sonuçları"
        breadcrumbCategoryLink="/ara"
        breadcrumbPostTitle={terms}
        breadcrumbPostUrl={url}
      />

      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              backgroundColor: "#ebebeb",
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              component="p"
              sx={{ color: "#000", width: "200px", fontWeight: 600 }}
            >
              Deprem Wiki'de Ara :
            </Typography>
            <Box sx={{ width: "100%" }}>
              <TextField
                hiddenLabel
                variant="filled"
                placeholder="Deprem Wiki'de Ara"
                fullWidth
                size="small"
                value={terms}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {data.map((item, index) => (
              <SearchItem key={index} item={item} />
            ))}
          </Box>

          <PaginationComponent
            current_page={current_page}
            last_page={last_page}
            url={url}
          />
        </Container>
      </section>
    </>
  );
};

export default SearchPage;
