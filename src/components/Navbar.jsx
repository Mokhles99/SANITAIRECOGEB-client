import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaPhone, FaRegEnvelope, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import logo from '../Assets/logosanitaire.png';
import CardIcon from "../components/Card/Cardicon";
import fr from '../Assets/fr.jpg';
import eng from '../Assets/eng.jpg';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setNavbarOpen(false);
    setLanguageMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="lg:block hidden bg-[#576D80] text-white py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">{t("navbar.address")}</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+216 73 225 471</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>contact@cogebgroupe.com</p>
            </span>
          </div>
        </div>
      </div>

      <div className={`transition-colors duration-300 ${scrolling ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center">
            <span className="flex items-center gap-x-2">
              <img src={logo} alt="Logo" className="w-4/4 h-4/4 object-contain" />
            </span>
            <div className="flex items-center lg:hidden relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] outline-none focus:outline-none"
              >
                <FaGlobe />
              </button>

              {languageMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded-md w-32 z-50">
                  <ul className="text-black text-sm">
                    <li
                      onClick={() => changeLanguage("fr")}
                      className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                    >
                      <img src={fr} alt="FR" className="w-5 h-5" />
                      Fr
                    </li>
                    <li
                      onClick={() => changeLanguage("en")}
                      className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                    >
                      <img src={eng} alt="EN" className="w-5 h-5" />
                      Eng
                    </li>
                  </ul>
                </div>
              )}

              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block outline-none focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="lg:flex hidden items-center gap-x-12 list-none lg:ml-auto">
            <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink onClick={(e) => handleNavLinkClick(e, "hero")}>{t("navbar.home")}</NavLink>
            </li>
            <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink onClick={(e) => handleNavLinkClick(e, "propos")}>{t("navbar.about")}</NavLink>
            </li>
            <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink onClick={(e) => handleNavLinkClick(e, "produits")}>{t("navbar.products")}</NavLink>
            </li>
            <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink onClick={(e) => handleNavLinkClick(e, "service")}>{t("navbar.services")}</NavLink>
            </li>
            <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink onClick={(e) => handleNavLinkClick(e, "temoi")}>{t("navbar.testimonials")}</NavLink>
            </li>
            <li className="py-2 flex font-medium items-center leading-snug ml-20">
              <button className={`py-4 hoverBtn flex items-center gap-2 ${scrolling ? 'text-black' : 'text-[#001F75]'}`}>
                <CardIcon className="text-2xl"/>
              </button>
            </li>

            {/* Desktop Language Icon */}
            <li className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`cursor-pointer text-xl leading-none ml-10 px-16 py-1 ${scrolling ? 'text-black' : 'text-black'}`}
              >
                <FaGlobe />
              </button>
              {languageMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded-md w-32 z-50">
                  <ul className="text-black text-sm">
                    <li
                      onClick={() => changeLanguage("fr")}
                      className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                    >
                      <img src={fr} alt="FR" className="w-5 h-5" />
                      Fr
                    </li>
                    <li
                      onClick={() => changeLanguage("en")}
                      className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                    >
                      <img src={eng} alt="EN" className="w-5 h-5" />
                      Eng
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${navbarOpen ? "flex" : "hidden"} w-full justify-center`}>
            <ul className="flex flex-col items-center gap-y-8 list-none">
              <li className="py-2">
                <NavLink onClick={(e) => handleNavLinkClick(e, "hero")}>{t("navbar.home")}</NavLink>
              </li>
              <li className="py-2">
                <NavLink onClick={(e) => handleNavLinkClick(e, "propos")}>{t("navbar.about")}</NavLink>
              </li>
              <li className="py-2">
                <NavLink onClick={(e) => handleNavLinkClick(e, "produits")}>{t("navbar.products")}</NavLink>
              </li>
              <li className="py-2">
                <NavLink onClick={(e) => handleNavLinkClick(e, "service")}>{t("navbar.services")}</NavLink>
              </li>
              <li className="py-2">
                <NavLink onClick={(e) => handleNavLinkClick(e, "temoi")}>{t("navbar.testimonials")}</NavLink>
              </li>
              <li className="py-2 ">
              <button className={`py-4 hoverBtn flex items-center gap-2 ${scrolling ? 'text-black' : 'text-[#001F75]'}`}>
                <CardIcon className="text-2xl"/>
              </button>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
