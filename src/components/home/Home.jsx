import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";
import MuliitemCarousel from "../elements/MultiItemCarousel";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { topMeels } from "../../utils/utils";

const BannerAd = ({ message, buttonText, buttonLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showBannerTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const hideBannerTimer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => {
      clearTimeout(showBannerTimer);
      clearTimeout(hideBannerTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed flex flex-col gap-4 justify-center items-center top-20 right-4 sm:top-24 sm:right-8 md:top-32 md:right-12 lg:top-36 lg:right-16 xl:top-40 xl:right-20 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg bg-red-500/80 text-white text-center p-4 sm:p-6 rounded-lg shadow-2xl z-50"
      initial={{ x: "50vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", stiffness: 50, damping: 25, duration: 0.8 }}
    >
      <p className="text-sm sm:text-base md:text-lg font-medium">{message}</p>
      <Link
        to={buttonLink}
        className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-red-600"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
};

const BannerWithSubBanners = ({ mainBanner, subBanners }) => {
  return (
    <div className="flex flex-col md:flex-row m-2">
      {/* Main Banner (2/3 width on larger screens) */}
      <div className="w-full md:w-2/3 relative mb-4 md:mb-0">
        <motion.div
          className="h-full flex items-center justify-center text-white text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-lg">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {mainBanner.title}
            </motion.h1>
            <motion.p
              className="text-lg mb-8 max-w-xl drop-shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {mainBanner.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                to={mainBanner.buttonLink}
                className="bg-transparent border border-gray-600 shadow-md hover:border-2 hover:shadow-xl text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
              >
                {mainBanner.buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sub Banners (1/3 width on larger screens, full width on smaller screens) */}
      <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subBanners.map((banner, index) => (
          <motion.div
            key={index}
            className="relative h-[150px] rounded-md overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url(${banner.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center p-4">
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {banner.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  videoSrc,
  halfHeight,
  dynamicGradient,
  parallaxEffect,
  animatedIcon,
}) => {
  return (
    <div
      className={`m-2 ${
        halfHeight ? "h-[48vh]" : "h-[80vh]"
      } flex flex-col justify-center border rounded-md shadow-md items-center text-center text-white p-6 relative overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: parallaxEffect ? "fixed" : "unset",
      }}
    >
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Вашият браузър не поддържа видеа.
        </video>
      )}

      {/* Motion Div for animation */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg mb-8 max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            to={buttonLink}
            className="bg-transparent border border-gray-600 shadow-md hover:border-2 hover:shadow-xl text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

const BannerSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  dynamicGradient,
  animatedIcon,
}) => {
  return (
    <motion.div
      className="m-2 h-[48vh] rounded-md shadow-2xl flex flex-col justify-center items-center text-center text-white p-8 relative overflow-hidden bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 animate-gradient"
      style={{
        background: dynamicGradient
          ? "linear-gradient(120deg, #ff6b6b, #ffcc00, #06beb6, #845ec2)"
          : "none",
        backgroundSize: "300% 300%",
        animation: dynamicGradient ? "gradientBG 6s ease infinite" : "none",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg mb-8 max-w-3xl drop-shadow-md leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to={buttonLink}
          className="bg-transparent border border-gray-600 shadow-md hover:border-2 hover:shadow-xl text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
        >
          {buttonText}
        </Link>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const handleScroll = (direction) => {
    const scrollAmount = window.innerHeight;
    window.scrollBy({
      top: direction === "down" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const mainBanner = {
    title: "Голямото пътешествие започва тук",
    description: "Разгледайте нови възможности за вашите проекти.",
    buttonText: "Започни сега",
    buttonLink: "/start",
    backgroundImage: "/assets/images/main-banner.jpg",
  };

  const subBanners = [
    {
      title: "Нов продукт",
      backgroundImage: "/assets/images/sub-banner1.jpg",
    },
    {
      title: "Тенденции 2025",
      backgroundImage: "/assets/images/sub-banner2.jpg",
    },
    {
      title: "Промоции",
      backgroundImage: "/assets/images/sub-banner3.jpg",
    },
    {
      title: "Общи условия",
      backgroundImage: "/assets/images/sub-banner4.jpg",
    },
  ];

  const heroData = [
    {
      title: "Открий света на светлината",
      description: "Изживейте уникално визуално пътешествие",
      buttonText: "Разгледай сега",
      buttonLink: "/explore",
      videoSrc: "/assets/videos/ikis_light_short.mp4",
    },
  ];

  const halfHeightBanners = [
    {
      title: "Присъедини се към нашата общност",
      description:
        "Регистрирай се и стани част от нашата креативна екосистема.",
      buttonText: "Регистрация",
      buttonLink: "/register",
      backgroundImage: "/assets/images/slamp.jpg",
    },
    {
      title: "Нов производител в платформата",
      description:
        "Запознай се с нашият нов партньор и неговото уникално портфолио.",
      buttonText: "Виж повече",
      buttonLink: "/portfolio",
      videoSrc: "/assets/videos/ikis_light_short.mp4",
    },
  ];

  const bottomBanner = [
    {
      title: "Присъедини се към нашата общност",
      description:
        "Регистрирай се и стани част от нашата креативна екосистема.",
      buttonText: "Регистрация",
      buttonLink: "/register",
      backgroundImage:
        "https://ikis-light.com/wp-content/uploads/2024/07/DSC_5005.jpg",
    },
  ];

  return (
    <div className="w-full mt-4">
      <BannerAd
        message="Не изпускайте специалните ни предложения! Само за ограничено време."
        buttonText="Виж офертите"
        buttonLink="/offers"
      />

      <section>
        {heroData.map((hero, index) => (
          <HeroSection key={index} {...hero} />
        ))}
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          {halfHeightBanners.map((hero, index) => (
            <HeroSection key={index} {...hero} halfHeight />
          ))}
        </div>

        <MuliitemCarousel topMeels={topMeels} />
      </section>

      {/* New Dynamic Banner Sections */}

      <section>
        {bottomBanner.map((hero, index) => (
          <HeroSection key={index} {...hero} halfHeight />
        ))}

        <BannerSection
          title="Изследвай нови възможности"
          description="Започни да създаваш уникални проекти с нашите инструменти."
          buttonText="Започни сега"
          buttonLink="/start"
          dynamicGradient={true}
        />

        <BannerWithSubBanners mainBanner={mainBanner} subBanners={subBanners} />
      </section>

      {/* <div className="fixed left-[50%] bottom-10 flex flex-col gap-4 translate-x-[-50%]">
        <button
          onClick={() => handleScroll("up")}
          className="p-4 rounded-full bg-transparent text-white"
        >
          <HiChevronUp className="text-6xl text-purple-600 hover:text-purple-800" />
        </button>

        <button
          onClick={() => handleScroll("down")}
          className="p-4 rounded-full bg-transparent text-white"
        >
          <HiChevronDown className="text-6xl text-purple-600 hover:text-purple-800" />
        </button>
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
