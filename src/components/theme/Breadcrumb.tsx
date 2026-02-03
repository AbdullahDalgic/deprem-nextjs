import Link from "next/link";
import Script from "next/script";
import { RiHomeLine, RiArrowRightSLine } from "react-icons/ri";

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
    <div className="breadcrumb-area bg-white/60 dark:bg-gray-900/60 backdrop-blur-[2px] border-b border-gray-200/40 dark:border-gray-800/40">
      <div className="container mx-auto max-w-6xl">
        <nav aria-label="breadcrumb" className="py-4">
          <ol className="flex items-center gap-1 flex-wrap text-xs sm:text-sm">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                className="group flex items-center gap-1 font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-150"
              >
                <RiHomeLine className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="hidden sm:inline">Deprem Wiki</span>
                <span className="sm:hidden">Ana</span>
              </Link>
            </li>

            {/* Category */}
            {breadcrumbCategory && (
              <>
                <li className="flex items-center text-gray-300 dark:text-gray-600 mx-0.5">
                  <RiArrowRightSLine className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </li>
                <li>
                  <Link
                    href={breadcrumbCategoryLink || "#"}
                    className="font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors duration-150"
                  >
                    {breadcrumbCategory}
                  </Link>
                </li>
              </>
            )}

            {/* Post Title */}
            {breadcrumbPostTitle && (
              <>
                <li className="flex items-center text-gray-300 dark:text-gray-600 mx-0.5">
                  <RiArrowRightSLine className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </li>
                <li>
                  <Link
                    href={breadcrumbPostUrl || "#"}
                    className="font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors duration-150 max-w-xs truncate block"
                    title={breadcrumbPostTitle}
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
