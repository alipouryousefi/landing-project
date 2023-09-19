import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-start items-center lg:px-36 lg:mt-12">
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
