import { Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";
import Script from "next/script";
import { MdNavigateNext } from "react-icons/md";

interface BreadcrumbProps {
  breadcrumbCategory?: string;
  breadcrumbCategoryLink?: string;
  breadcrumbPostUrl?: string;
  breadcrumbPostTitle?: string;
}

export default function Breadcrumb({
  breadcrumbCategory,
  breadcrumbCategoryLink,
  breadcrumbPostUrl,
  breadcrumbPostTitle,
}: BreadcrumbProps) {
  const jsonData = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://deprem.wiki",
          name: "Deprem Wiki",
        },
      },
    ],
  };

  if (breadcrumbCategory) {
    jsonData.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": breadcrumbCategoryLink || "#",
        name: breadcrumbCategory,
      },
    });
  }

  if (breadcrumbPostTitle) {
    jsonData.itemListElement.push({
      "@type": "ListItem",
      position: 3,
      item: {
        "@id": breadcrumbPostUrl || "#",
        name: breadcrumbPostTitle,
      },
    });
  }

  return (
    <div className="breadcrumb-area">
      <Container maxWidth="lg">
        <Breadcrumbs
          aria-label="breadcrumb"
          className="breadcrumb-content"
          separator={<MdNavigateNext fontSize="small" />}
        >
          <Link style={{ display: "flex", alignItems: "center" }} href="/">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Deprem Wiki
            </Typography>
          </Link>

          {breadcrumbCategory && (
            <Link
              style={{ display: "flex", alignItems: "center" }}
              href={breadcrumbCategoryLink || "#"}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {breadcrumbCategory}
              </Typography>
            </Link>
          )}

          {breadcrumbPostTitle && (
            <Link
              style={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href={breadcrumbPostUrl || "#"}
              legacyBehavior
            >
              <a style={{ fontWeight: "bold" }}>{breadcrumbPostTitle}</a>
            </Link>
          )}
        </Breadcrumbs>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      />
    </div>
  );
}
