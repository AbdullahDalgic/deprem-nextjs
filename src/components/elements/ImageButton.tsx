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
        {/* <Image src={props.image} alt={props.title} width={25} height={25} /> */}
        <img src={props.image} alt={props.title} style={{ width: "25px", height: "25px" }} className="w-6 h-6 object-contain" />
      </Link>
    </div>
  );
}
