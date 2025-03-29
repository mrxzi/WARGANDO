import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight"; // Assuming Spotlight is already created
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable scroll when the modal is open
  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  // Enable scroll when the modal is closed
  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling again
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full"></div>

      {/* Spotlight Background */}
      <Spotlight className="absolute inset-0 z-0" />

      {/* Main content */}
      <div className="h-full flex flex-col items-center justify-center text-white relative z-20 px-4 md:px-8 lg:px-16">
        {/* Heading with animation */}
        <motion.h1
          className="text-center text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          WARGAINDO <br /> ROLEPLAY
        </motion.h1>

        {/* Subheading with animation */}
        <motion.p
          className="text-center text-lg md:text-2xl lg:text-3xl mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Multipemain Online dengan dunia terbuka yang besar di mana <br />
          Anda bisa menjadi siapa pun yang Anda inginkan!
        </motion.p>

        {/* Buttons with hover and animation */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Start Game Button */}
          <motion.a
            href="#start-game"
            className="bg-red-500 hover:bg-red-600 text-white py-4 px-8 text-base md:text-lg rounded-full flex items-center gap-3 justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Mulai permainan
          </motion.a>

          {/* Watch Video Button */}
          <motion.a
            onClick={handleModalOpen}
            className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-8 text-base md:text-lg rounded-full flex items-center gap-3 justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <FaPlay /> Video Permainan
          </motion.a>
        </motion.div>
      </div>

      {/* Modal for the Video */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Modal content */}
          <div className="relative w-full h-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black p-2 rounded-full opacity-80 hover:opacity-100"
            >
              &times;
            </button>
            {/* YouTube Video */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hUNktbn-qIc?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;