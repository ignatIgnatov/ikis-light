import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div>
    <div className="w-full h-6 bg-gray-400"></div>
     <div className="h-auto flex flex-col md:flex-row justify-between p-6 bg-gray-300">
      {/* Информация */}
      <div className="flex flex-col justify-between mb-6 md:mb-0">
        <h1 className="text-2xl font-semibold mb-2">Информация</h1>
        <Link className="hover:text-red-800 hover:font-semibold mb-1" to={"/"}>
          За нас
        </Link>
        <Link className="hover:text-red-800 hover:font-semibold mb-1" to={"/"}>
          Общи условия
        </Link>
        <Link className="hover:text-red-800 hover:font-semibold mb-1" to={"/"}>
          Потребителски права
        </Link>
        <Link className="hover:text-red-800 hover:font-semibold mb-1" to={"/"}>
          Политика за бисквитки
        </Link>
        <Link className="hover:text-red-800 hover:font-semibold mb-1" to={"/"}>
          Политика за поверителност
        </Link>
        <Link className="hover:text-red-800 hover:font-semibold" to={"/"}>
          Контакти
        </Link>
      </div>

      {/* Работно време и адрес */}
      <div className="flex flex-col justify-between mb-6 md:mb-0">
        <div className="flex flex-col justify-between mb-4">
          <h1 className="text-2xl font-semibold mb-2">Работно време</h1>
          <p>Понеделник - Петък 09:30 - 18:30</p>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-semibold mb-2">Адрес</h1>
          <p>Офис ул. Бяло поле 3, Комфорт офис център, ет.5, оф.18.</p>
        </div>
      </div>

      {/* Контакти */}
      <div className="flex flex-col justify-start mb-6 md:mb-0">
        <h1 className="text-2xl font-semibold mb-2">Свържете се с нас</h1>
        <p>+359886507787</p>
        <p>+359886507787</p>
        <p>
          Имейл:{" "}
          <Link className="hover:text-red-800" to={"/"}>
            office@ikis-light.com
          </Link>
        </p>
      </div>

      {/* Лого и социални икони */}
      <div className="flex flex-col justify-between items-center">
        <div className="mb-4">
          <Link to={"/"}>
            <img className="h-14" src="/assets/images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="flex justify-center items-center border border-gray-600 rounded-md p-2 hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out">
            <Link to="https://facebook.com">
              <FaFacebook size={30} />
            </Link>
          </div>
          <div className="flex justify-center items-center border border-gray-600 rounded-md p-2 hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out">
            <Link to="https://linkedin.com">
              <FaLinkedin size={30} />
            </Link>
          </div>
          <div className="flex justify-center items-center border border-gray-600 rounded-md p-2 hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out">
            <Link to="https://instagram.com">
              <FaInstagram size={30} />
            </Link>
          </div>
          <div className="flex justify-center items-center border border-gray-600 rounded-md p-2 hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out">
            <Link to="https://pinterest.com">
              <FaPinterest size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
