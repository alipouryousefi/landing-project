import React from "react";
import Image from "next/image";
import { SocialIconProps } from "@/types";

const SocialIcon = ({ src, alt, style }: SocialIconProps) => {
  return (
    <li
      className={`cursor-pointer hover:opacity-80 duration-300 ease-out transition-all ${style}`}
    >
      <Image src={src} width={24} height={24} alt={alt} />
    </li>
  );
};

export default SocialIcon;
