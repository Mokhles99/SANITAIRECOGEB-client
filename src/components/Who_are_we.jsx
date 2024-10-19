import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { getAllAbouts } from "../actions/about.actions"; // Assurez-vous d'importer correctement votre action

const Who_are_we = () => {
  const dispatch = useDispatch();

  // Dispatch de l'action pour récupérer les données
  useEffect(() => {
    dispatch(getAllAbouts());
  }, [dispatch]);

  const abouts = useSelector((state) => state.about.abouts);
  const state = useSelector((state) => state);

  const firstImageUrl = abouts.length > 0 && abouts[0].files.length > 0
  ? abouts[0].files[0].url
  : '';
  const secondImageUrl = abouts.length > 1 && abouts[1].files.length > 0
  ? abouts[1].files[0].url
  : '';

const thirdImageUrl = abouts.length > 2 && abouts[2].files.length > 0
  ? abouts[2].files[0].url
  : '';
  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8" id="propos">
      <div className="lg:w-2/5">
        <p className="text-[#0c4f37] md:text-3xl text-lg font-medium"  style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
            }}>
          A PROPOS 
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3"  style={{
              fontFamily: "'Playfair Display', serif",
             
            }}>
          Qui Sommes-Nous ?
        </h1>

        <p className="lg:w-4/5 text-[#a5a5a5] text-justify"  style={{
              fontFamily: "'Playfair Display', serif ",
              
            }}>
       Fondée en 1980, COGEB se spécialise dans la vente des produits sanitaire. Leader dans son domaine, elle propose divers produits , répondant aux besoins des pros et particuliers.


        </p>

        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            {/* <FaHome className="text-4xl text-[#0c4f37] w-1/3" /> */}
            <span className="">
              {/* <h1 className="text-[#0c4f37] text-lg font-medium">
                Donec porttitor euismod
              </h1> */}
              <p className="text-[#a5a5a5] w-5/5 text-justify">
              COGEB excelle dans la vente d'articles sanitaires, robinetterie, et accessoires. Alliant qualité et diversité, elle couvre une large gamme de produits, de l'économique au luxe, en partenariat avec des marques reconnues.


              </p>
            </span>
          </div>

          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            {/* <FaHome className="text-4xl text-[#0c4f37] w-1/3" /> */}
            <span className="">
              {/* <h1 className="text-[#0c4f37] text-lg font-medium">
                Donec porttitor euismod
              </h1> */}
              <p className="text-[#a5a5a5] w-5/5 text-justify">
              Avec ses showrooms modernes et un vaste stock, COGEB offre une expérience unique. Son équipe compétente et dédiée garantit un service personnalisé, répondant aux besoins spécifiques de chaque projet.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
        <img
          // src="/assets/propos1.png"
          src={firstImageUrl || "/assets/propos1.png" }
          alt=""
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img
            // src="/assets/propos3.png"
            src={secondImageUrl || "/assets/propos3.png" }
            alt=""
            className="w-full h-3/5 rounded-3xl shadow-md object-cover"
          />
          <img
            // src="/assets/image4sanitaire.jpg"
            src={thirdImageUrl || "/assets/image4sanitaire.jpg"}
            alt=""
            className="w-full h-2/5 rounded-3xl shadow-md object-cover"
          />
          {/* <button className="bg-gradient-to-r from-[#7992d76b] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button> */}
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
         
          <span className="">
           
          
            <p className="text-[#a5a5a5] w-5/5 text-justify">
          COGEB excelle dans la vente de matériel et de produits de
          construction. Alliant qualité et diversité, elle s'associe à des
          marques reconnues pour fournir des solutions adaptées à tous les
          besoins du secteur.
        </p>
          
          </span>
        </div>

        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
      
          <span className="">
          
            <p className="text-[#a5a5a5] w-5/5 text-justify">
          Avec ses showrooms spécialisés et une grande capacité de stockage,
          COGEB offre une expérience unique. Son équipe compétente garantit un
          service personnalisé, répondant aux besoins spécifiques de chaque
          projet de construction.
        </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Who_are_we;
