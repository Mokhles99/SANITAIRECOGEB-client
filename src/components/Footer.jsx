import React, { useState } from 'react'
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaRegEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import logo from '../Assets/logosanitaire.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const modalContentMapping = {
  Devis: {
    title: "Calcul de Devis sur Mesure",
    description: "Chez COGEB, nous comprenons que chaque projet est unique et nécessite une approche personnalisée. C'est pourquoi nous offrons un service de calcul de devis sur mesure pour répondre précisément à vos besoins. Que vous soyez un particulier, un professionnel de la construction, ou un entrepreneur, nous sommes là pour vous fournir des estimations détaillées et précises. Notre équipe d'experts est disponible pour vous guider à travers le processus de sélection des matériaux, des quantités nécessaires, et des options les plus adaptées à votre projet. Nous vous garantissons des devis compétitifs, transparents, et livrés dans les meilleurs délais. Faites-nous confiance pour vous accompagner dans la réalisation de vos projets, quels que soient leur envergure ou leur complexité."
  },
  Confidentialite: {
    title: "Politique de Confidentialité",
    description: "Chez COGEB, la protection de vos données personnelles est une priorité absolue. Nous nous engageons à respecter votre vie privée et à traiter vos informations avec le plus grand soin. Notre politique de confidentialité explique en détail comment nous collectons, utilisons, et protégeons les informations que vous nous fournissez. Que vous nous contactiez pour un devis, que vous vous inscriviez à notre newsletter, ou que vous effectuiez un achat, soyez assuré que vos données sont sécurisées. Nous utilisons des technologies de pointe pour protéger vos informations contre tout accès non autorisé et nous nous engageons à ne jamais vendre, échanger, ou louer vos données personnelles à des tiers. Notre engagement en matière de confidentialité est une promesse que nous tenons à chaque étape de notre relation avec vous."
  },
  Support: {
    title: "Support et Conseils",
    description: "Chez COGEB, nous croyons que le succès de votre projet repose sur un accompagnement de qualité. C'est pourquoi nous offrons un service de support complet, conçu pour répondre à toutes vos questions et vous fournir les conseils dont vous avez besoin. Notre équipe de support est composée de professionnels expérimentés, prêts à vous assister à chaque étape de votre projet. Que vous ayez besoin d'aide pour choisir les matériaux les plus appropriés, d'informations techniques, ou de conseils sur les meilleures pratiques, nous sommes là pour vous guider. Nous nous engageons à fournir un support rapide, efficace, et personnalisé, afin de vous aider à surmonter tous les défis que vous pourriez rencontrer. Chez COGEB, votre satisfaction est notre priorité, et nous mettons tout en œuvre pour assurer le succès de vos projets."
  }
  
};

const Footer = () => {

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (type) => {
    setModalData(modalContentMapping[type]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/21698751725'; 
  };

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100067771234549&mibextid=ZbWKwL';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/cogeb_immobiliere?igsh=MW9ub3kzbmE1ZXRoNw==';
  };
  return (
    <footer>
      <section className="flex flex-col bg-[#e6edeb] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left text-center">
            <div className="lg:block flex flex-col items-center justify-center">
              <span className="flex items-center gap-x-2">
              <span className="flex items-center gap-x-2">
             
             <img src={logo} alt="Logo" className=" h-3/4 object-contain" />
         
         
         </span>
              </span>
              <p className="xl:text-base text-sm py-4 w-4/5 lg:text-left text-center">
              COGEB, Avenue Hedi Nouira 4003 - Sousse - Tunisie
              </p>
              <span className="flex items-center gap-x-2 pt-4">
                <FaPhone className="" />
                <p>+216 73 225 471</p>
              </span>
              <span className="flex items-center gap-x-2 pt-2">
                <FaRegEnvelope className="" />
                <p>contact@cogebgroupe.com</p>
              </span>
            </div>
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Informations
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("hero");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}>Accueil</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("propos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }} >A Propos</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer"    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("produits");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}>Produits</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer"    onClick={(e) => {
      e.preventDefault();
      const section = document.getElementById("service");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}>Services</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Liens Utiles
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Devis')}>Devis</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Confidentialite')}>Confidentialité</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Support')}>Support</li>
              </ul>
            </div>
           

            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">
              Trouvez-Nous
              </p>
            

              <span className="text-[#001F75] flex items-center gap-4 text-2xl lg:justify-normal justify-center">
              <FaWhatsapp className="cursor-pointer" onClick={handleWhatsAppClick} />
                <FaFacebookF className="cursor-pointer" onClick={handleFacebookClick} />
                <FaInstagram className="cursor-pointer" onClick={handleInstagramClick} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:block hidden bg-[#D8DADF] text-[#7b7a7a] xl:text-base text-sm">
      <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center">
          <p>© 2024 COGEB - Tous droits réservés</p>
          <ul className="flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center gap-x-4">
            <li className="cursor-pointer">Conditions générales d'utilisation</li>
            <li className="cursor-pointer">Politique de confidentialité</li>
            <li className="cursor-pointer">COGEB</li>
          </ul>
        </div>
      </section>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            backgroundColor: "white",
            p: 4,
            borderRadius: 20,
            maxWidth: '50%',
            mx: 'auto',
            mt: '20%',
            maxHeight: '90vh',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto',
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: 'bold' }}
          >
            {modalData.title}
          </Typography>
          <Typography 
            variant="body1" 
            component="p"
            sx={{
              fontSize: {
                xs: '12px',
                sm: '13px',
                md: '14px',
                lg: '16px',
                xl: '18px',
              },
            }}
          >
            {modalData.description}
          </Typography>
        </Box>
      </Modal>
    </footer>
  );
};

export default Footer;
