import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-[80%] relative">
      <motion.span
        animate={{ x: [100, 0] }}
        transition={{ duration: 1 }}
        className="absolute -top-full right-0"
      >
        <Image src="/images/laptop.png" alt="circle" width={387} height={218} />
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative font-gilroy text-white font-bold text-[88px] text-left leading-[84px] inline"
      >
        Where Web3
        <span className="absolute -top-3 -right-5">
          <Image src="/images/circle.svg" alt="circle" width={56} height={56} />
        </span>
        <span className="absolute top-3 -left-6">
          <Image
            src="/images/first-colored-circle.svg"
            alt="circle"
            width={18}
            height={18}
          />
        </span>
        <span className="absolute -top-3 left-14">
          <Image src="/images/circle.svg" alt="circle" width={56} height={56} />
        </span>
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative font-gilroy text-white font-bold text-[88px] text-left leading-[84px]"
      >
        Gaming History Begins
        <span className="font-poppins text-lg font-normal leading-8 text-white absolute -bottom-16 left-36">
          Be Among the First Creators on 3engine
        </span>
        <span className="absolute -bottom-20 -left-14 -z-10">
          <Image
            src="/images/RoundCube.png"
            alt="circle"
            width={187}
            height={158}
            className="object-contain"
          />
        </span>
        <span className="absolute bottom-0 left-[51.5%]">
          <Image src="/images/circle.svg" alt="circle" width={29} height={29} />
        </span>
        <span className="absolute -bottom-5 -rigth-5">
          <Image
            src="/images/second-colored-circle.svg"
            alt="circle"
            width={18}
            height={18}
          />
        </span>
      </motion.h1>
    </section>
  );
};

export default Banner;
