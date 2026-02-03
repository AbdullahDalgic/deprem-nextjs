import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IImageButton {
  link: string;
  image: string;
  title: string;
}

export default function ImageButton(props: IImageButton) {
  return (
    <div className="flex items-center">
      <Link href={props.link} target="_blank" rel="noreferrer nofollow">
        <Image src={props.image} alt={props.title} width={25} height={25} />
      </Link>
    </div>
  );
}
