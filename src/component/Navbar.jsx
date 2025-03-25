import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Datas = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Events", link: "/Events" },
    { name: "Artists", link: "/Artists" },
    { name: "Registration", link: "/Registration" },
    { name: "Gallery", link: "/Gallery" },
    { name: "Contect", link: "/Contect" },
  ];

  return (
    <nav className="text-white w-full text-2xl flex items-center justify-between h-[70px] py-0 px-8 fixed top-0 left-0 bg-[#130520] z-50">
      {/* Logo */}
      <img src={"../logo.png"} className="h-[50px] md:h-[70px]" alt="Logo" />

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Navbar Links */}
      <div
        className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#130520] md:bg-transparent flex flex-col md:flex-row items-center gap-5 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden md:flex"}`}
      >
        {Datas.map((item) => (
          <Link key={item.name} to={item.link} className="hover:text-yellow-500 py-2 md:py-0">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
