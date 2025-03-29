"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react"; // Assuming you're using lucide-react for icons
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0 ? true : false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-[90vw] sm:max-w-[60vw] fixed z-[5000] top-6 sm:top-10 inset-x-0 mx-auto px-6 sm:px-12 py-3 sm:py-4 rounded-lg border border-white/.1 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(10px) saturate(90%)",
          backgroundColor: "rgba(218, 218, 218, 0.37)",
          borderRadius: "12px",
          border: "1px solid rgba(187, 182, 182, 0)",
        }}
      >
        {/* Container for left-aligned items, including the logo */} 
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* Logo - Increased size and moved to the left */}
          <Link href="/" className="mr-2 sm:mr-4">
            <img src="/logo1.png" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
          </Link>

          {/* Vertical line separating the logo and text */}
          <div className="h-8 sm:h-10 border-l border-gray-400"></div>

          {/* Left-aligned nav items */}
          {navItems.slice(0, 2).map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 text-sm sm:text-lg items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-300 ease-in-out group"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="!cursor-pointer">{navItem.name}</span>
              {/* Hover underline effect */}
              <span className="block h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>

        {/* Container for right-aligned items with background color */}
        <div className="flex space-x-3 sm:space-x-6">
          {navItems.slice(2, 4).map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 text-sm sm:text-lg items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-300 ease-in-out"
              )}
            >
              <span className="block">{navItem.icon}</span>
              {/* Added background color and padding for the last two items */}
              <span className="bg-red-500 text-white px-2 sm:px-3 py-2 rounded-lg flex items-center space-x-2 !cursor-pointer">
                {/* Split text color: red and black */}
                <span className="text-white-500">{navItem.name.split("")[0]}</span>
                <span className="text-white">{navItem.name.split(" ")[1]}</span>
                {/* Icons next to text */}
                {idx === 0 ? (
                  <Download className="w-4 h-4 text-white" />
                ) : (
                  <Download className="w-4 h-4 text-white" />
                )}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
