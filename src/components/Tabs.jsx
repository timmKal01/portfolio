import React from "react";
import { motion } from "framer-motion";

const Tabs = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (value) => {
  return activeTab === value
    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
    : "text-secondary hover:text-primary";
};

  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-surface rounded-full flex flex-wrap gap-2 md:gap-4 p-2 shadow-sm border border-line">
         {tabList.map((tab) => (
                    <motion.button
                        key={tab.id}
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{
                            opacity: activeTab === tab.value ? 1 : 0.9,
                            scale: activeTab === tab.value ? 1.07 : 1,
                        }}
                        transition={{ duration: 0.25 }}
                        className={`text-xs md:text-[15px] font-medium transition-all duration-200 
                              ${getActiveStyles(tab.value)} 
                                rounded-full px-5 md:px-10 py-[6px] md:py-3 focus:outline-none`}
                        onClick={() => onChange(tab.value)}
                        
                    >
                        {tab.label}
                    </motion.button>
        ))}
      </div>
    </div>
  );
};
export default Tabs