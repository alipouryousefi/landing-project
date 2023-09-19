import Image from "next/image";
import React from "react";

const Tab = () => {
  return (
    <section className="mt-28 ml-56 flex flex-col justify-center items-start w-full z-20 -mb-16">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              className="inline-block px-12 py-4 border-x-2 border-white rounded-tl-xl bg-white font-poppins text-base font-semibold leading-6"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Join
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="inline-block px-3 py-4 bg-[#0078F2] font-poppins text-base font-normal leading-6 text-white border-r border-[rgba(255, 255, 255, 0.50)]"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Leaderboard
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="inline-block px-4 py-4 bg-[#0078F2] font-poppins text-base font-normal leading-6 text-white rounded-tr-xl overflow-hidden"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Your Friends
            </button>
          </li>
        </ul>
      </div>
      <div
        className="bg-white flex justify-around items-center rounded-b-xl rounded-tr-xl"
        id="myTabContent"
      >
        <div className="flex flex-col justify-center items-start pt-8 pb-11 pl-10 w-[300px]">
          <span className="flex justify-start items-center">
            <Image
              src={"/images/sms.svg"}
              width={24}
              height={24}
              className="object-contain"
              alt="sms"
            />
            <span className="font-poppins text-xl font-medium leading-8 pl-2">
              Your Email
            </span>
          </span>
          <input
            type="text"
            className="font-poppins text-base font-semibold leading-5 border-0 outline-none w-full mt-3"
            value={"Rezanmdesign@gmail.com"}
          />
        </div>
        <div className="flex flex-col justify-center items-start pt-8 pb-11 pl-10 w-[300px]">
          <span className="flex justify-start items-center">
            <Image
              src={"/images/sms-star.svg"}
              width={24}
              height={24}
              className="object-contain"
              alt="sms"
            />
            <span className="font-poppins text-xl font-medium leading-8 pl-2">
              Who invited you?
            </span>
          </span>
          <input
            type="text"
            className="font-poppins text-base font-semibold leading-5 border-0 outline-none w-full mt-3"
            value={"Hi@abol.dev"}
          />
        </div>
        <button className="ml-64 bg-[#0078F2] px-12 py-11 h-full text-white font-poppins text-xl font-bold leading-8 rounded-r-xl btn-shadow">
          <Image
            src={"/images/sms-tracking.svg"}
            width={24}
            height={24}
            className="object-contain"
            alt="sms"
          />
          JOIN
        </button>
      </div>
    </section>
  );
};

export default Tab;
