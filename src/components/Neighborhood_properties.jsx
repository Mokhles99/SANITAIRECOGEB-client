import React, { useState, useRef, useEffect } from 'react';
import LatestPropertyWithPagination from './Latest_property_pagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'; // Importation de useTranslation

const productTypeMapping = {
  'Grès': ['Tous', 'Navarti', 'Mykonos', 'Rak', 'Halcon'],
  'Faience': ['Tous', 'Halcon', 'Emigres', 'Mykonos', 'Navarti', 'Rak'],
  'Robinet': ['Tous', 'Clever', 'Kludi Rak'],
  'Sanitaire': ['Tous', 'Kludi Rak', 'Baros'],
};

const modalContent = {
  Sanitaire: {
    backgroundColor: "#e6edeb",
    description:
      "Cogeb est l'un des leaders d'importation de grès Faïences et articles sanitaires en tout genre, Soit la Robinetterie , et les accessoires de salle de bain des grandes marques sur le marché mondial dont la Marque Rak Navarti, Porcelanosa et autres.Pensant aussi aux petits budgets notre société offre aussi des articles locaux des meilleurs fournisseurs tunisiens Édifis, Somocer, et autres , et ce afin de garantir les produits sanitaires à tous les goûts et tous les pouvoirs d'achats.",
    suppliers: [
      "/assets/logosanit1.png",
      "/assets/logosanit2.png",
      "/assets/logosanit3.png",
      "/assets/logosanit4.png",
      "/assets/logosanit5.png",
      "/assets/logosanit6.png",
      "/assets/logosanit7.png",
      "/assets/logosanit8.png",
    ],
  },
};

const Neighborhood_properties = ({ products }) => {
  const { t } = useTranslation(); // Utilisation de useTranslation
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFamille, setActiveFamille] = useState('Tous');
  const [activeTypes, setActiveTypes] = useState([]);
  const productsRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    // handleFilter('Tous');
  }, [products]);

  const handleFilter = (famille) => {
    setActiveFamille(famille);
    if (famille === 'Tous') {
      setFilteredProducts(products);
      setActiveTypes([]);
    } else {
      setFilteredProducts(products.filter(product => product.famille === famille));
      setActiveTypes(productTypeMapping[famille] || []);
    }
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getActiveClass = (famille) => {
    return activeFamille === famille ? 'shadow-blue-500 shadow-lg cursor-pointer' : 'cursor-pointer';
  };

  const handleOpenModal = () => {
    setModalData(modalContent['Sanitaire']);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <main className="container mx-auto px-3 lg:pt-24" id="produits">
      <p className="text-[#0c4f37] uppercase md:text-3xl text-lg" style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "0.2em",
        marginTop: "2rem"
      }}>
        {t('catalogues.title')}
      </p>
      <h1 className="lg:text-4xl text-xl font-medium capitalize pt-3 pb-12" style={{
        fontFamily: "'Playfair Display', serif",
      }}>
        {t('catalogues.subtitle')}
      </h1>
      <button onClick={handleOpenModal} className="text-[#001F75] rounded-full border border-[#001F75] px-3 py-2 mb-4 hover:bg-[#001F75] hover:text-white focus:bg-[#001F75] focus:text-white">
        {t('catalogues.detailsButton')}
      </button>

      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-4 lg:gap-10 gap-4 pb-12">
        <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Grès')}`} onClick={() => handleFilter('Grès')}>
          <img src="/assets/image1sanitaire.jpg" alt={t('categories.grès.title')} className="rounded-3xl object-cover w-full h-full sm:h-48 md:h-60 lg:h-80" />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl flex items-end">
            <p className="text-white font-bold p-4 sm:p-6 md:p-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{
              fontFamily: "'CinzelDecorative', serif",
              letterSpacing: "0.1em",
            }}>
              {t('categories.grès.title')}
            </p>
          </div>
        </div>

        <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Robinet')}`} onClick={() => handleFilter('Robinet')}>
          <img src="/assets/catrob.JPG" alt={t('categories.robinet.title')} className="rounded-3xl object-cover md:h-80 h-full w-full" />
          <span className="absolute md:bottom-8 bottom-4 md:left-6 left-4">
            <p className="text-white text-xs sm:text-sm md:text-xl lg:text-xl xl:text-3xl" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.1em",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {t('categories.robinet.title')}
            </p>
          </span>
        </div>
        
        {/* Ajoutez ici les autres catégories comme Faience, Sanitaire, Tous, etc. */}



        <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Faience')}`} onClick={() => handleFilter('Faience')}>
          <img
            src="/assets/image4sanitaire.jpg"
            alt="Faience"
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
            {t('categories.faience.title')}
            </p>
          </span>
        </div>
        <div className={`relative md:col-span-4 rounded-3xl ${getActiveClass('Tous')}`} onClick={() => handleFilter('Tous')}>
          <img
            src="/assets/newtoussanit 1.png"
            alt="Tous les produits"
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
{t('categories.tous.title')}            </p>
          </span>
        </div>
        <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Sanitaire')}`} onClick={() => handleFilter('Sanitaire')}>
          <img
            src="/assets/newsanit 1.png"
            alt="Sanitaire"
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
           {t('categories.sanitaire.title')}
            </p>
          </span>
        </div>

      </section>

      <div ref={productsRef}>
        <LatestPropertyWithPagination products={filteredProducts} activeTypes={activeTypes} />
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{
          backgroundColor: "white",
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: { xs: 10, sm: 15, md: 20 },
          width: { xs: '95%', sm: '90%', md: '85%' },
          maxWidth: '1200px',
          mx: 'auto',
          my: { xs: '5%', sm: '7%', md: '10%' },
          maxHeight: { xs: '90vh', sm: '85vh', md: '80vh' },
          overflowY: 'auto',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' } }}>
            {t('categories.sanitaire.title')}
          </Typography>
          <Typography variant="body1" component="p" sx={{
            fontSize: {
              xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem',
            }, mt: 2
          }}>
            {t('categories.sanitaire.description')}
            </Typography>

          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mt: 4, fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' } }}>
            {t('suppliersTitle')}
          </Typography>
          <Box mt={3} display="grid" gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: 'repeat(4, 1fr)' }} gap={2}>
            {modalData.suppliers?.map((supplier, index) => (
              <img key={index} src={supplier} alt={`Supplier ${index + 1}`} style={{
                width: "100%", height: "auto", maxHeight: "60px", objectFit: "contain", margin: "5px", maxWidth: "100%", flexShrink: 0, borderRadius: "5px"
              }} />
            ))}
          </Box>
        </Box>
      </Modal>
    </main>
  );
};

export default Neighborhood_properties;
