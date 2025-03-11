import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`h-20 border border-gray-200 shadow-lg rounded-md flex justify-between items-center mx-2 px-6 mt-2 mb-10 bg-blue-100 fixed top-0 left-0 right-0 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4">
        <Link to={"/"}>
          <img className="h-14" src="/assets/images/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="hidden md:flex flex-row gap-6">
        <Link
          to={"/"}
          className="text-gray-600 font-semibold rounded-md px-3 py-1 hover:border-b hover:shadow-lg transition-shadow duration-500 ease-in-out"
        >
          Осветителни тела
        </Link>
        <Link
          to={"/"}
          className="text-gray-600 font-semibold rounded-md px-3 py-1 hover:border-b hover:shadow-lg transition-shadow duration-500 ease-in-out"
        >
          Light Lab
        </Link>
        <Link
          to={"/"}
          className="text-gray-600 font-semibold rounded-md px-3 py-1 hover:border-b hover:shadow-lg transition-shadow duration-500 ease-in-out"
        >
          Контакти
        </Link>
      </div>

      <div className="hidden md:flex flex-row gap-6">
        <div className="text-gray-600 font-semibold rounded-md px-3 py-1 hover:border-b hover:shadow-lg transition-shadow duration-500 ease-in-out">
          <Link to={"/login"}>Sign In</Link>
        </div>
        <div className="text-gray-600 font-semibold rounded-md px-3 py-1 hover:border-b hover:shadow-lg transition-shadow duration-500 ease-in-out">
          <Link to={"/register"}>Register</Link>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-2 mt-2 px-6 rounded-md absolute top-20 left-0 w-[50%] bg-blue-100 flex flex-col items-start py-4 shadow-lg md:hidden">
          <Link to={"/"} className="text-gray-600 font-semibold py-2">
            Осветителни тела
          </Link>
          <Link to={"/"} className="text-gray-600 font-semibold py-2">
            Light Lab
          </Link>
          <Link to={"/"} className="text-gray-600 font-semibold py-2">
            За контакти
          </Link>
          <Link to={"/login"} className="text-gray-600 font-semibold py-2">
            Sign In
          </Link>
          <Link to={"/register"} className="text-gray-600 font-semibold py-2">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
