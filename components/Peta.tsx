"use client";
import { FC } from 'react';
import { motion } from 'framer-motion';

const GtaMap: FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background map image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/peta.jpg')`, // Make sure to replace this with the path to your GTA SA map image
        }}
      ></div>

      {/* Centered button */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black bg-opacity-75 px-6 py-3 text-white font-semibold flex items-center rounded-full shadow-lg"
        >
          {/* Icon before text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6H20M4 12H20M4 18H20"
            />
          </svg>
          Lihat peta
        </motion.button>
      </div>
    </div>
  );
};

export default GtaMap;
