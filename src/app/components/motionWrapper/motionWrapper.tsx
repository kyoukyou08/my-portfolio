"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileInView={{ x: 0, y: 0, scale: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionWrapper;
