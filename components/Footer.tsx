import { FaPlay, FaCreditCard } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full text-white py-10 px-5 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">
          Mainkan SAMP dengan <span className="text-gray-300">WargaIndo Role Play!</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-3xl">
          Benamkan diri Anda dalam dunia game terbuka dan rasakan seperti karakter apa pun...
        </p>

        <div className="mt-5 text-gray-300 text-sm max-w-3xl bg-gray-900 p-5 rounded-lg text-left">
          <p className="font-semibold">WIRP adalah game GTA SA yang dimodifikasi menjadi roleplay</p>
          <p className="mt-2">
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>kami menciptakan komunitas sehat dan bersahabat dengan merangkul teman teman penikmat ROLEPLAY. kami percaya diri WARGA INDO ROLEPLAY menjadi tempat yang cocok untuk berkembang</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-3">
          <img src="/logo1.png" alt="Logo" className="w-8 h-8" />
          <span>© 2025 WargaIndo Role Play</span>
        </div>

        <div className="flex gap-5 mt-3 md:mt-0">
          <span>Discord</span>
          <ul className="flex gap-3">
            <li>TikTok</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-3">
        </div>
        <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300">
          <RiArrowUpSFill className="text-white text-2xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
