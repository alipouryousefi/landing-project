import Image from "next/image";
import React from "react";

const Topic = () => {
  return (
    <section className="w-[80%] relative">
      <span className="absolute -top-full right-0">
        <Image src="/images/laptop.png" alt="circle" width={387} height={218} />
      </span>
      <h1 className="relative font-gilroy text-white font-bold text-[88px] text-left leading-[84px] inline">
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
      </h1>

      <h1 className="relative font-gilroy text-white font-bold text-[88px] text-left leading-[84px]">
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
      </h1>
    </section>
  );
};

export default Topic;
