import Image from "next/image";
import React from "react";
import { SocialIcon } from ".";

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
              <li className="text-white text-right font-gilroy text-lg font-semibold leading-7 underline capitalize cursor-pointer hover:opacity-80 duration-300 ease-out transition-all">
                privacy
              </li>
              <li className="text-white text-right font-gilroy text-lg font-semibold leading-7 underline capitalize ml-6 cursor-pointer hover:opacity-80 duration-300 ease-out transition-all">
                terms and condition
              </li>
            </ul>
            <ul className="flex items-center justify-center ml-12">
              <SocialIcon src="/images/twitter.svg" alt="Twitter" />
              <SocialIcon
                src="/images/linkedin.svg"
                alt="LinkedIn"
                style="mx-6"
              />
              <SocialIcon src="/images/discord.svg" alt="Discord" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
