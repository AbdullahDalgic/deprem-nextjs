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
    <div className="breadcrumb-area py-2">
      <div className="container mx-auto max-w-6xl px-4">
        <nav aria-label="breadcrumb" className="breadcrumb-content" style={{ padding: '10px 0' }}>
          <ol className="flex items-center gap-1.5 flex-wrap text-sm">
            <li>
              <Link href="/" className="flex items-center font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                Deprem Wiki
              </Link>
            </li>

            {breadcrumbCategory && (
              <>
                <li className="text-gray-400 dark:text-gray-600">
                  <MdNavigateNext className="text-xs" />
                </li>
                <li>
                  <Link
                    href={breadcrumbCategoryLink || "#"}
                    className="flex items-center font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {breadcrumbCategory}
                  </Link>
                </li>
              </>
            )}

            {breadcrumbPostTitle && (
              <>
                <li className="text-gray-400 dark:text-gray-600">
                  <MdNavigateNext className="text-xs" />
                </li>
                <li>
                  <Link
                    href={breadcrumbPostUrl || "#"}
                    className="flex items-center font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                  >
                    {breadcrumbPostTitle}
                  </Link>
                </li>
              </>
            )}
          </ol>
        </nav>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      />
    </div>
  );
}
