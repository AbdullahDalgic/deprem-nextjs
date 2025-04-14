import { PUBLISHER } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  image?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  title?: string;
  doFollow?: boolean;
  target?: string;
  children?: React.ReactNode;
};

export default function CustomLink(props: Props) {
  const { title, image, href, doFollow, target, children } = props;
  const { src, alt, width, height } = image || {};

  return (
    <Link href={href} legacyBehavior>
      <a target={target} rel={doFollow ? "" : "noreferrer nofollow"}>
        {title ??
          (image?.src ? (
            <Image
              src={src!}
              alt={alt || title || PUBLISHER}
              width={width || 25}
              height={height || 25}
              style={{ width: "auto" }}
            />
          ) : null)}
        {children}
      </a>
    </Link>
  );
}
