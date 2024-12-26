import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Samia. All rights reserved.</p>
        {/* Social Icons */}
        <div className="flex gap-6">
          <Link href="https://github.com/ssamiaa" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition-transform transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://linkedin.com/in/samiasajid2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 transition-transform transform hover:scale-110" size={24} />
          </Link>
          <Link href="https://instagram.com/samiaxsajid" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-400 transition-transform transform hover:scale-110" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
