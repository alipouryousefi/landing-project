import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10">
      <Image
        src={"/images/footer.png"}
        alt="footer"
        width={1000}
        height={800}
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-0 w-full">
        <div className="bg-[rgba(0,0,0,0.10)] backdrop-blur-md flex justify-between items-center py-4 mx-24 px-6">
          <span className="font-gilroy text-lg text-white font-normal">
            © 2023 3Engine. All rights reserved.
          </span>
          <div className="flex justify-center items-center">
            <ul className="flex items-center justify-center">
              <li className="text-white text-right font-gilroy text-lg font-semibold leading-7 underline capitalize cursor-pointer">
                privacy
              </li>
              <li className="text-white text-right font-gilroy text-lg font-semibold leading-7 underline capitalize ml-6 cursor-pointer">
                terms and condition
              </li>
            </ul>
            <ul className="flex items-center justify-center ml-12">
              <li>
                <Image
                  src={"/images/twitter.svg"}
                  width={24}
                  height={24}
                  alt="twitter"
                />
              </li>
              <li className="mx-6">
                <Image
                  src={"/images/linkedin.svg"}
                  width={24}
                  height={24}
                  alt="linkedin"
                />
              </li>
              <li>
                <Image
                  src={"/images/discord.svg"}
                  width={24}
                  height={24}
                  alt="discord"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
