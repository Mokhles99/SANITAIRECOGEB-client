

// import React, { useState, useRef } from 'react';
// import LatestPropertyWithPagination from './Latest_property_pagination';

// const Neighborhood_properties = ({ products }) => {
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [activeFamille, setActiveFamille] = useState('Tous');
//   const productsRef = useRef(null);

//   const handleFilter = (famille) => {
//     setActiveFamille(famille);
//     if (famille === 'Tous') {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(products.filter(product => product.famille === famille));
//     }
//     productsRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const getActiveClass = (famille) => {
//     return activeFamille === famille ? 'shadow-blue-500 shadow-lg cursor-pointer' : 'cursor-pointer';
//   };

//   return (
//     <main className="container mx-auto px-3 lg:pt-24">
//       <span className="flex justify-center pb-12">
//         {/* <button className="bg-gradient-to-r from-[#7992d76b] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto"></button> */}
//       </span>
//       <p className="text-[#0c4f37] uppercase md:text-3xl text-lg" style={{
//         fontFamily: "'Playfair Display', serif",
//         letterSpacing: "0.2em",
//         marginTop:"2rem"
//       }}>
//         NOS CATALOGUES
//       </p>
//       <h1 className="lg:text-4xl text-xl font-medium capitalize pt-3 pb-12" style={{
//         fontFamily: "'Playfair Display', serif",
//       }}>
//         Choisir vos désirs 
//       </h1>

//       <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
//         <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Grès')}`} onClick={() => handleFilter('Grès')}>
//           <img
//             src="/assets/image1sanitaire.jpg"
//             alt=""
//             className="rounded-3xl object-cover md:h-80 h-40 w-full"
//             style={{
//               position: 'relative'
//             }}
//           />
//           <span style={{
//             content: '',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '50%',
//             background: 'linear-gradient(to top, rgb(0 0 0 / 53%), rgba(0, 0, 0, 0))',
//             borderRadius: '1.5rem'
//           }} />
//           <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
//             <p className="text-white lg:text-3xl md:text-base text-sm" style={{
//               fontFamily: "'CinzelDecorative', serif",
//               fontWeight: "bold",
//               letterSpacing: "0.2em",
//             }}>
              
//              GRES
//             </p>
//           </span>
//         </div>
//         <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Robinet')}`} onClick={() => handleFilter('Robinet')}>
//           <img
//             src="/assets/catrob.JPG"
//             alt=""
//             className="rounded-3xl object-cover md:h-80 h-40 w-full"
//             style={{
//               position: 'relative'
//             }}
//           />
//           <span style={{
//             content: '',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '50%',
//             background: 'linear-gradient(to top, rgb(0 0 0 / 53%), rgba(0, 0, 0, 0))',
//             borderRadius: '1.5rem'
//           }} />
//           <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
//             <p className="text-white lg:text-3xl md:text-base text-sm" style={{
//               fontFamily: "'CinzelDecorative', serif",
//               fontWeight: "bold",
//               letterSpacing: "0.2em",
//             }}>
//            ROBINETTERIE
//             </p>
//           </span>
//         </div>
//         <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Faience')}`} onClick={() => handleFilter('Faience')}>
//           <img
//             src="/assets/image4sanitaire.jpg"
//             alt=""
//             className="rounded-3xl object-cover md:h-80 h-40 w-full"
//             style={{
//               position: 'relative'
//             }}
//           />
//           <span style={{
//             content: '',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '50%',
//             background: 'linear-gradient(to top, rgb(0 0 0 / 53%), rgba(0, 0, 0, 0))',
//             borderRadius: '1.5rem'
//           }} />
//           <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
//             <p className="text-white lg:text-3xl md:text-base text-sm" style={{
//               fontFamily: "'CinzelDecorative', serif",
//               fontWeight: "bold",
//               letterSpacing: "0.2em",
//             }}>
//             FAÏENCE
//             </p>
//           </span>
//         </div>
//         <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Tous')}`} onClick={() => handleFilter('Tous')}>
//           <img
//             src="/assets/allsanitaire 1.png"
//             alt=""
//             className="rounded-3xl object-cover md:h-80 h-40 w-full"
//             style={{
//               position: 'relative'
//             }}
//           />
//           <span style={{
//             content: '',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '50%',
//             background: 'linear-gradient(to top, rgb(0 0 0 / 53%), rgba(0, 0, 0, 0))',
//             borderRadius: '1.5rem'
//           }} />
//           <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
//             <p className="text-white lg:text-3xl md:text-base text-sm" style={{
//               fontFamily: "'CinzelDecorative', serif",
//               fontWeight: "bold",
//               letterSpacing: "0.2em",
//             }}>
//           TOUS LES PRODUITS
//             </p>
//           </span>
//         </div>
//         <div className={`relative md:col-span-4 rounded-3xl ${getActiveClass('Salle de bain')}`} onClick={() => handleFilter('Salle de bain')}>
//           <img
//             src="/assets/catsani.png"
//             alt=""
//             className="rounded-3xl object-cover md:h-80 h-40 w-full"
//             style={{
//               position: 'relative'
//             }}
//           />
//           <span style={{
//             content: '',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '50%',
//             background: 'linear-gradient(to top, rgb(0 0 0 / 53%), rgba(0, 0, 0, 0))',
//             borderRadius: '1.5rem'
//           }} />
//           <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
//             <p className="text-white lg:text-3xl md:text-base text-sm" style={{
//               fontFamily: "'CinzelDecorative', serif",
//               fontWeight: "bold",
//               letterSpacing: "0.2em",
//             }}>
//            SALLE DE BAIN
//             </p>
//           </span>
//         </div>
//       </section>

//       <span className="flex justify-end pb-12 w-4/5">
//         {/* <button className="bg-gradient-to-r from-[#7992d76b] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button> */}
//       </span>

//       {/* Pass filteredProducts to LatestPropertyWithPagination */}
//       <div ref={productsRef}>
//         <LatestPropertyWithPagination products={filteredProducts} />
//       </div>
//     </main>
//   );
// };

// export default Neighborhood_properties;


import React, { useState, useRef, useEffect } from 'react';
import LatestPropertyWithPagination from './Latest_property_pagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const productTypeMapping = {
  'Grès': ['Tous', 'Navarti', 'Mykonos', 'Rak', 'Halcon'],
  'Faience': ['Tous', 'Halcon', 'Emigres', 'Mykonos' ,'Navarti','Rak'],
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
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFamille, setActiveFamille] = useState('Tous');
  const [activeTypes, setActiveTypes] = useState([]);
  const productsRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    handleFilter('Tous'); // Select 'Tous' by default on load
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
    <main className="container mx-auto px-3 lg:pt-24" id="produits" >
      <p className="text-[#0c4f37] uppercase md:text-3xl text-lg" style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "0.2em",
        marginTop: "2rem"
      }}>
        NOS CATALOGUES
      </p>
      <h1 className="lg:text-4xl text-xl font-medium capitalize pt-3 pb-12" style={{
        fontFamily: "'Playfair Display', serif",
      }}>
        Choisir vos désirs 
      </h1>
      <button
                onClick={handleOpenModal}
                className="text-[#001F75] rounded-full border border-[#001F75] px-3 py-2 mb-4 hover:bg-[#001F75] hover:text-white focus:bg-[#001F75] focus:text-white"
              
              >
                Plus de Détails 
              </button>

      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
        <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Grès')}`} onClick={() => handleFilter('Grès')}>
          <img
            src="/assets/image1sanitaire.jpg"
            alt="Grès"
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
             GRES
            </p>
          </span>
        </div>
        <div className={`relative md:col-span-2 rounded-3xl ${getActiveClass('Robinet')}`} onClick={() => handleFilter('Robinet')}>
          <img
            src="/assets/catrob.JPG"
            alt="Robinet"
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
           ROBINETTERIE
            </p>
          </span>
        </div>
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
            FAÏENCE
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
          TOUS LES PRODUITS
            </p>
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
           SANITAIRE
            </p>
          </span>
        </div>
      </section>

      <div ref={productsRef}>
        <LatestPropertyWithPagination products={filteredProducts} activeTypes={activeTypes} />
      </div>


      <Modal open={openModal} onClose={handleCloseModal}>
        <Box 
          sx={{
            // backgroundColor: modalData.backgroundColor,
            backgroundColor:"white",
            p: 4,
            borderRadius: 20,
            maxWidth: '85%',
            mx: 'auto',
            mt: '7%',
            maxHeight: '80vh',     // Limit modal height
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'  // Add shadow to the modal
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            A Propos :
          </Typography>
          <Typography 
  variant="body1" 
  component="p"
  sx={{
    fontSize: {
      xs: '12px',  // Small screens
      sm: '14px',  // Small to medium screens
      md: '16px',  // Medium screens
      lg: '18px',  // Large screens
      xl: '20px',  // Extra large screens
    },
  }}
>
  {modalData.description}
</Typography>

          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mt: 4 }}>
            Nos Fournisseurs :
          </Typography>
          <Box mt={6} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))" gap={2}>
  {modalData.suppliers?.map((supplier, index) => (
    <img 
      key={index} 
      src={supplier} 
      alt={`Supplier ${index + 1}`} 
      style={{
        width: "100%",
        height: "60px",  // Height of each logo
        objectFit: "contain",
        margin: "5px",  // Adds some spacing between logos
        maxWidth: "100%",
        flexShrink: 0,  // Ensures the images do not shrink too much
        borderRadius: "5px"  // Optional: Add rounded corners
      }} 
    />
  ))}
</Box>

        </Box>
      </Modal>
    </main>
  );
};

export default Neighborhood_properties;
