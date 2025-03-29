"use client";

import React, { useState } from "react";
import { FaWindows, FaAndroid, FaDownload } from "react-icons/fa";

const LauncherInstall = () => {
  // State untuk switch tab Windows / Android
  const [activeTab, setActiveTab] = useState("Windows");

  return (
    <section id="launcher" className="py-8 md:py-20 text-white">
      {/* Section Heading */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Download launcher
        </h1>
        <p className="text-base md:text-2xl text-gray-400 mt-2">
          launcher untuk Windows dan Android
        </p>
      </div>

      {/* System Requirements */}
      <div className="flex flex-col items-center mt-10">
        <div className="bg-gray-900 bg-opacity-80 p-6 md:p-10 rounded-xl shadow-lg w-full max-w-lg md:max-w-3xl transition-all duration-300 ease-in-out">
          <div className="flex justify-center mb-6 md:mb-10 space-x-4">
            {/* Tabs untuk Windows dan Android */}
            <button
              type="button"
              className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-semibold transition-all duration-300 ease-in-out ${
                activeTab === "Windows"
                  ? "bg-white text-black"
                  : "bg-gray-600 text-gray-300"
              }`}
              onClick={() => setActiveTab("Windows")}
            >
              <FaWindows className="inline mr-2" /> Windows
            </button>
            <button
              type="button"
              className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-semibold transition-all duration-300 ease-in-out ${
                activeTab === "Android"
                  ? "bg-white text-black"
                  : "bg-gray-600 text-gray-300"
              }`}
              onClick={() => setActiveTab("Android")}
            >
              <FaAndroid className="inline mr-2" /> Android
            </button>
          </div>

          {/* System Requirements Details dengan transisi smooth */}
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            {activeTab === "Windows" && (
              <div className="text-gray-300 space-y-2 md:space-y-4 text-base md:text-lg">
                <p>
                  <strong>Operating System:</strong> Windows 10 (64 bit)
                </p>
                <p>
                  <strong>Processor:</strong> Intel Core i5-6600K / AMD FX-6300
                </p>
                <p>
                  <strong>RAM:</strong> 6 GB
                </p>
                <p>
                  <strong>Graphics Card:</strong> 2 GB Video Memory
                </p>
                <p>
                  <strong>Storage:</strong> 12 GB
                </p>
              </div>
            )}

            {activeTab === "Android" && (
              <div className="text-gray-300 space-y-2 md:space-y-4 text-base md:text-lg">
                <p>
                  <strong>Operating System:</strong> Android 9.0 or later
                </p>
                <p>
                  <strong>Processor:</strong> Snapdragon 845 atau lebih tinggi
                </p>
                <p>
                  <strong>RAM:</strong> 4 GB
                </p>
                <p>
                  <strong>Storage:</strong> 8 GB
                </p>
              </div>
            )}
          </div>

          {/* Tombol Download */}
          <div className="mt-8 md:mt-10 text-center">
            <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-3 md:px-10 md:py-4 text-lg md:text-2xl rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-105">
              <FaDownload className="mr-2" /> Download Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LauncherInstall;
