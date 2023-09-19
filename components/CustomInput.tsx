import { CustomInputProps } from "@/types";
import Image from "next/image";
import React, { forwardRef } from "react";

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    const { imageSrc, label, ...other } = props;
    return (
      <div className="flex flex-col justify-center items-start w-[300px] pl-10">
        <span className="flex justify-start items-center">
          <Image
            src={imageSrc}
            width={24}
            height={24}
            className="object-contain"
            alt={imageSrc}
          />
          <span className="font-poppins text-xl font-medium leading-8 pl-2">
            {label}
          </span>
        </span>
        <input
          ref={ref}
          type="text"
          className="font-poppins text-base font-semibold leading-5 border-0 outline-none w-full mt-3"
          {...other}
        />
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
