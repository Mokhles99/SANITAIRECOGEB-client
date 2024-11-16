import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import logo from '../Assets/logosanitaire.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const modalContentMapping = {
    Devis: {
      title: t("footer.Devis.title"),
      description: t("footer.Devis.description"),
    },
    Confidentialite: {
      title: t("footer.Confidentialite.title"),
      description: t("footer.Confidentialite.description"),
    },
    Support: {
      title: t("footer.Support.title"),
      description: t("footer.Support.description"),
    }
  };

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
                <img src={logo} alt="Logo" className=" h-3/4 object-contain" />
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
                {t("footer.Informations")}
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>{t("footer.Accueil")}</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => document.getElementById("propos").scrollIntoView({ behavior: "smooth" })}>{t("footer.APropos")}</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => document.getElementById("produits").scrollIntoView({ behavior: "smooth" })}>{t("footer.Produits")}</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => document.getElementById("service").scrollIntoView({ behavior: "smooth" })}>{t("footer.Services")}</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                {t("footer.LiensUtiles")}
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Devis')}>{t("footer.Devis.title")}</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Confidentialite')}>{t("footer.Confidentialite.title")}</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer" onClick={() => handleOpenModal('Support')}>{t("footer.Support.title")}</li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">
                {t("footer.TrouvezNous")}
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
            <li className="cursor-pointer">{t("footer.ConditionsGenerales")}</li>
            <li className="cursor-pointer">{t("footer.PolitiqueConfidentialite")}</li>
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
