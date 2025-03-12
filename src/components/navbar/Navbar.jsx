import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import MuliitemCarousel from "../elements/MultiItemCarousel";
import { luni, pendeli } from "../../utils/utils";

const Interior = () => {
  const [showLuni, setShowLuni] = useState(false);
  const [showPendeli, setShowPendeli] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-start gap-6 rounded-lg m-2 bg-transparent">
        <div className="p-6 rounded-lg shadow-lg bg-transparent">
          <h1 className="text-lg font-semibold">Акустични лампи</h1>
          <Link
          className="hover:font-semibold"
            onClick={() => {
              setShowLuni(!showLuni);
              setShowPendeli(false);
            }}
            to={"/"}
          >
            Луни за вграждане
          </Link>
          <p>Акустични шини</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-transparent">
          <h1 className="text-lg font-semibold">Настолни лампи</h1>
          <Link
          className="hover:font-semibold"
            onClick={() => {
              setShowPendeli(!showPendeli);
              setShowLuni(false);
            }}
            to={"/"}
          >
            Пенделни лампи
          </Link>
          <p>Спотове / Насочено осветление</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-transparent">
          <h1 className="text-lg font-semibold">Стенни лампи</h1>
          <p>Стоящи лампи</p>
          <p>Таванни</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-transparent">
          <h1 className="text-lg font-semibold">Най-нови</h1>
        </div>
      </div>
      {showLuni && <MuliitemCarousel topMeels={luni} />}
      {showPendeli && <MuliitemCarousel topMeels={pendeli} />}
    </div>
  );
};

const Exterior = () => {
  return (
    <div className="flex flex-row justify-start gap-6 rounded-lg m-2 bg-transparent">
      <div className="p-6 rounded-lg shadow-lg bg-transparent">
        <h1 className="text-lg font-semibold">Декоративни лампи</h1>
        <p>За вграждане</p>
        <p>Спотове / насочено осветление</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-transparent">
        <h1 className="text-lg font-semibold">Стенни лампи</h1>
        <p>Стоящи лампи</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-transparent">
        <h1 className="text-lg font-semibold">Стълбчета</h1>
        <p>Таванни лампи</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-transparent">
        <h1 className="text-lg font-semibold">Най-нови</h1>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLightActive, setIsLightActive] = useState(false);
  const [showInterior, setShowInterior] = useState(false);
  const [showExterior, setShowExterior] = useState(false);

  const interiorRef = useRef(null);
  const exteriorRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ако кликнеш извън интериорния блок, скривай интериора
      if (interiorRef.current && !interiorRef.current.contains(event.target)) {
        setShowInterior(false);
      }

      // Ако кликнеш извън екстериорния блок, скривай екстериора
      if (exteriorRef.current && !exteriorRef.current.contains(event.target)) {
        setShowExterior(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="flex flex-col gap-4">
      <div
        className={`h-20 border border-gray-200 shadow-lg rounded-md flex justify-between items-center mx-2 px-6 mt-2 mb-10 bg-blue-100 fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
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
            onClick={() => setIsLightActive(!isLightActive)}
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
          <div className="mt-2 px-6 rounded-md absolute z-50 top-20 left-0 w-[50%] bg-blue-100 flex flex-col items-start py-4 shadow-lg md:hidden">
            <Link
              to={"/"}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 font-semibold py-2"
            >
              Осветителни тела
            </Link>
            <Link
              to={"/"}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 font-semibold py-2"
            >
              Light Lab
            </Link>
            <Link
              to={"/"}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 font-semibold py-2"
            >
              За контакти
            </Link>
            <Link
              to={"/login"}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 font-semibold py-2"
            >
              Sign In
            </Link>
            <Link
              to={"/register"}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 font-semibold py-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {isLightActive ? (
        <div
          className={`bg-blue-200 mt-24 mx-2  flex flex-row justify-between items-center shadow-lg rounded-lg`}
        >
          <div className="flex flex-row gap-2 my-2 ml-2">
            <Link
              className="hover:shadow-lg font-semibold p-2 px-4 rounded-lg"
              to={"/"}
              onMouseEnter={() => {
                setShowInterior(true);
                setShowExterior(false);
              }}
              onMouseLeave={() => {
                // Don't hide when mouse leaves the button
              }}
            >
              Интериор
            </Link>
            <Link
              className="hover:shadow-lg font-semibold p-2 px-4 rounded-lg"
              to={"/"}
              onMouseEnter={() => {
                setShowExterior(true);
                setShowInterior(false);
              }}
              onMouseLeave={() => {
                // Don't hide when mouse leaves the button
              }}
            >
              Екстериор
            </Link>
          </div>
          <div>
            <Link
              className="hover:shadow-lg font-semibold p-2 px-6 rounded-lg"
              to={"/"}
            >
              Типове помещения
            </Link>
          </div>
          <div>
            <Link
              className="hover:shadow-lg font-semibold p-2 px-6 rounded-lg"
              to={"/"}
            >
              Visual Search
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-24"></div>
      )}

      {showInterior && (
        <div ref={interiorRef}>
          <Interior />
        </div>
      )}

      {showExterior && (
        <div ref={exteriorRef}>
          <Exterior />
        </div>
      )}
    </div>
  );
};

export default Navbar;
