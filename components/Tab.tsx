import { selectedTabTypes } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { InviteForm } from ".";

const selectedStyles = "bg-white font-semibold";
const unSelectedStyles =
  "bg-[#0078F2] text-white font-normal hover:opacity-80 duration-300 transition-all ease-in-out";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
}

const Tab = () => {
  const [selecetedTab, setSelectedTab] = useState<selectedTabTypes>(0);
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, index, ...other } = props;
    return (
      <div role="tabpanel">{selecetedTab === index && <>{children}</>}</div>
    );
  };
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
              className={`inline-block px-12 py-4 rounded-tl-xl font-poppins text-base leading-6 ${
                selecetedTab === 0 ? selectedStyles : unSelectedStyles
              }`}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => setSelectedTab(0)}
            >
              Join
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`inline-block px-3 py-4 font-poppins text-base leading-6 border-r border-[rgba(255, 255, 255, 0.50)] ${
                selecetedTab === 10 ? selectedStyles : unSelectedStyles
              }`}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => setSelectedTab(10)}
            >
              Leaderboard
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`inline-block px-4 py-4 text-base leading- rounded-tr-xl ${
                selecetedTab === 20 ? selectedStyles : unSelectedStyles
              }`}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => setSelectedTab(20)}
            >
              Your Friends
            </button>
          </li>
        </ul>
      </div>
      <CustomTabPanel index={0}>
        <InviteForm />
      </CustomTabPanel>
      <CustomTabPanel index={10}>
        <InviteForm />
      </CustomTabPanel>
      <CustomTabPanel index={20}>
        <InviteForm />
      </CustomTabPanel>
    </section>
  );
};

export default Tab;
