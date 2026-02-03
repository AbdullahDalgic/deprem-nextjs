import Link from "next/link";

interface ISectionTitle {
  title: string;
  link?: string;
  linkText?: string;
}

export default function SectionTitle({ title, link, linkText }: ISectionTitle) {
  return (
    <div className="section__title-wrap mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        {linkText && (
          <Link 
            href={link || "#"}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-700 dark:hover:text-primary-400 transition-colors font-semibold group"
          >
            <span>{linkText}</span>
            <i className="far fa-arrow-right group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}
