import { selectedTabTypes } from "@/types";
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

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<selectedTabTypes>(0);
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, index } = props;
    return (
      <div role="tabpanel">{selectedTab === index && <>{children}</>}</div>
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
              {[0, 10, 20].map((tabIndex) => (
                <li className="" key={tabIndex} role="presentation">
                  <button
                    className={`inline-block px-${
                      tabIndex === 0 ? 12 : 6
                    } py-4 ${
                      tabIndex === 10
                        ? "border-r border-[rgba(255, 255, 255, 0.50)]"
                        : ""
                    } font-poppins text-base leading-6 ${
                      tabIndex === 0 && "rounded-tl-xl"
                    } ${tabIndex === 20 && "rounded-tr-xl"} ${
                      selectedTab === tabIndex
                        ? selectedStyles
                        : unSelectedStyles
                    }`}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => setSelectedTab(tabIndex)}
                  >
                    {tabIndex === 0 && "Join"}
                    {tabIndex === 10 && "Leaderboard"}
                    {tabIndex === 20 && "Your Friends"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {[0, 10, 20].map((tabIndex) => (
            <CustomTabPanel key={tabIndex} index={tabIndex}>
              <InviteForm />
            </CustomTabPanel>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Tabs;
