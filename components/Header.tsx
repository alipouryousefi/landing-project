import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-start items-center lg:px-[146px] lg:mt-[51px]">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        className="object-contain"
        width={238}
        height={47}
      />
    </header>
  );
};

export default Header;
