import { CustomInputProps } from "@/types";
import Image from "next/image";

const CustomInput = (props: CustomInputProps) => {
  return (
    <div className="flex flex-col justify-center items-start w-[300px] pl-10">
      <span className="flex justify-start items-center">
        <Image
          src={props.imageSrc}
          width={24}
          height={24}
          className="object-contain"
          alt={props.imageSrc}
        />
        <span className="font-poppins text-xl font-medium leading-8 pl-2">
          {props.label}
        </span>
      </span>
      <input
        type="text"
        className="font-poppins text-base font-semibold leading-5 border-0 outline-none w-full mt-3"
        {...props}
      />
    </div>
  );
};

export default CustomInput;
