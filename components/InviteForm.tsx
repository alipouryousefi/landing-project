import { InviteFormTypes } from "@/types";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from ".";

const InviteForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Your Email is invalid")
      .required("This field is required"),
    invitedEmail: yup
      .string()
      .email("Your Email is invalid")
      .required("This field is required"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "Rezanmdesign@gmail.com",
      invitedEmail: "Hi@abol.dev",
    },
  });

  const onSubmit = (data: InviteFormTypes) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex justify-around items-center rounded-b-xl rounded-tr-xl"
      id="myTabContent"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="relative pt-8 pb-11">
            <CustomInput
              label="Your Email"
              imageSrc="/images/sms.svg"
              {...field}
            />
            <span className="relative w-full block">
              {errors.email && (
                <p className="text-red-500 absolute -bottom-6 left-11">
                  {errors.email.message}
                </p>
              )}
            </span>
          </div>
        )}
      />
      <Controller
        name="invitedEmail"
        control={control}
        render={({ field }) => (
          <div className="relative pt-8 pb-11">
            <CustomInput
              label="Who invited you?"
              imageSrc="/images/sms-star.svg"
              {...field}
            />
            <span className="relative w-full block">
              {errors.invitedEmail && (
                <p className="text-red-500 absolute -bottom-6 left-11">
                  {errors.invitedEmail.message}
                </p>
              )}
            </span>
          </div>
        )}
      />

      <button
        className="ml-64 bg-[#0078F2] px-12 py-11 h-full text-white font-poppins text-xl font-bold leading-8 rounded-r-xl btn-shadow"
        type="submit"
      >
        <Image
          src={"/images/sms-tracking.svg"}
          width={24}
          height={24}
          className="object-contain"
          alt="sms"
        />
        JOIN
      </button>
    </form>
  );
};

export default InviteForm;
