import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarousels } from "../actions/carousel.actions";
import { useTranslation } from "react-i18next"; // Importer le hook de traduction

// Configuration responsive pour le carousel
const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Real_estate = () => {
  const { t } = useTranslation(); // Utiliser le hook de traduction

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarousels());

    // Exemple d'un timer pour effectuer un scroll automatique (commenté ici)
    // const timer = setTimeout(() => {
    //   const produitsSection = document.getElementById("produits");
    //   if (produitsSection) {
    //     produitsSection.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 10000); 

    // Retourner une fonction pour nettoyer le timer
    // return () => clearTimeout(timer); 
    
  }, [dispatch]);

  // useEffect(() => {
  //   const elementIds = ["hero", "propos", "produits", "service", "temoi"];
  //   const scrollToElements = async () => {
  //     for (const id of elementIds) {
  //       const doc = document.getElementById(id);
  //       doc.scrollIntoView({ behavior: "smooth" });
  //       await new Promise(resolve => setTimeout(resolve, 3000)); // Attendre 3 secondes avant de passer à l'élément suivant
  //     }
  //   };
  //   scrollToElements();
  // }, []);

  // Récupérer les images du carousel depuis le store Redux
  const images = useSelector((state) => state.carousel.carousels);
  console.log("Images du carousel :", images);

  // Images par défaut au cas où il n'y a pas d'images dans Redux
  const imagesTwo = [
    "/assets/Sanitaire1.png",
    "/assets/Sanitaire2.png",
    "/assets/sanitairecarous3.jpg",
    "/assets/sanitairecarous4.jpg",
  ];

  // Choisir les images à afficher (soit celles venant de Redux, soit les images par défaut)
  const imagesToDisplay = images.length > 0 ? images : imagesTwo;

  // Composant personnalisé pour les points de navigation du carousel
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "active" : ""} onClick={() => onClick()}>
        <span className="dot"></span>
      </li>
    );
  };

  return (
    <main className="mb-12" id="hero">
      <div className="relative w-full h-screen overflow-hidden">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          customDot={<CustomDot />}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          transitionDuration={500}
          className="absolute inset-0 w-full h-full"
        >
          {imagesToDisplay.map((img, index) => (
            <div
              key={index}
              className="w-full h-screen bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${
                  img.files ? img.files[0].url : img
                })` 
              }}
            ></div>
          ))}
        </Carousel>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4"
            style={{
              fontFamily: "'CinzelDecorative', serif",
              letterSpacing: "0.4em",
              lineHeight: "1.5em", 
            }}
          >
            <span className="block">{t('hero.title1')}</span>
            <span className="block">{t('hero.title2')}</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-3 py-16">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#7992d76b] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
          <p
            className="text-[#a5a5a5]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.1em",
            }}
          >
            {t('suppliers')}
          </p>
        </span>

        <div className="py-24">
          <Marquee>
            <img src="/assets/logosanit1.png" alt="" className="h-20 mr-32" />
            <img src="/assets/logosanit2.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit3.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit4.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit5.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit6.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit7.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logosanit8.png" alt="" className="w-20 h-22 mr-32" />
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Real_estate;
