import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaPhone, FaRegEnvelope, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import logo from '../Assets/logosanitaire.png'
import CardIcon from "../components/Card/Cardicon"
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="lg:block hidden bg-[#D8DADF] text-black py-2">
      <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">COGEB, Avenue Hedi Nouira 4003 - Sousse - Tunisie</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone className="" />
              <p>+216 73 225 471</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope className="" />
              <p>contact@cogebgroupe.com</p>
            </span>
          </div>
        </div>
      </div>

     

      <div className={`transition-colors duration-300 ${scrolling ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center ">
            <span className="flex items-center gap-x-2">
              <img src={logo} alt="Logo" className="w-4/4 h-4/4 object-contain" />
            </span>
            <div className="flex items-center">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>
          <div className="">
            <ul className="lg:flex hidden items-center gap-x-12 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("hero");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  > Accueil</NavLink>
              </li>
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("propos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  > A Propos</NavLink>
              </li>
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("produits");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Produits
  </NavLink>
              </li>
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("service");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >Services</NavLink>
              </li>
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'text-[#ffff] hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("temoi");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >Témoignages</NavLink>
              </li>
              
            </ul>
          </div>

          <div
            className={
              "lg:flex lg:items-center items-baseline lg:pt-0 pt-20 lg:h-auto h-screen lg:w-auto w-full justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <div className="lg:hidden flex flex-col gap-y-8 items-center">
             
              <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'hover:text-[#5badbb]'}`}>
              <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("hero");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  > Accueil</NavLink>
                </li>
                <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'hover:text-[#5badbb]'}`}>
                <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("propos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  > A Propos</NavLink>
                </li>
                <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'hover:text-[#5badbb]'}`}>
                <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("produits");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Produits
  </NavLink>
                </li>
                <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'hover:text-[#5badbb]'}`}>
                <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("service");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >Services</NavLink>
                </li>
                <li className={`py-2 flex font-medium items-center leading-snug cinzel-font ${scrolling ? 'text-black' : 'hover:text-[#5badbb]'}`}>
                <NavLink
    to="/"
    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("temoi");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >Témoignages</NavLink>
                </li>
              </div>

              <li className="py-2 flex font-medium items-center leading-snug">
                <button className={`py-4 hoverBtn flex items-center gap-2 ${scrolling ? 'text-black' : 'text-[#001F75]'}`}>
                  {/* <FaShoppingCart className="text-2xl" /> */}
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
