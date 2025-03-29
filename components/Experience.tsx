import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "@/data";
import { useSwipeable } from "react-swipeable";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % workExperience.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workExperience.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workExperience.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
  });

  return (
    <div
      {...handlers}
      className="py-16 px-4 w-full flex flex-col items-center relative bg-gray-900 bg-opacity-80 text-white rounded-2xl shadow-2xl max-w-6xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">BERITA KOTA</h1>
      <div className="relative w-full sm:w-[80%] max-w-4xl overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full flex-shrink-0 rounded-2xl overflow-hidden"
          >
            <img
              src={workExperience[currentIndex].thumbnail}
              alt="News Thumbnail"
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-5 rounded-b-2xl">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {workExperience[currentIndex].title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                {workExperience[currentIndex].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Slide Indicators */}
      <div className="flex space-x-2 mt-4">
        {workExperience.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4 h-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;