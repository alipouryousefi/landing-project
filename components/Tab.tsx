import { selectedTabTypes } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { InviteForm } from ".";
import { motion } from "framer-motion";

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
    const { children, index } = props;
    return (
      <div role="tabpanel">{selecetedTab === index && <>{children}</>}</div>
    );
  };
  return (
    <motion.div
      animate={{ y: [100, 0], zIndex: 20 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center items-center"
    >
      <section className="mt-28 flex flex-col justify-center items-center w-full z-20 -mb-16">
        <div>
          <div>
            <ul
              className="flex flex-wrap text-sm font-medium text-center"
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
        </div>
      </section>
    </motion.div>
  );
};

export default Tab;
