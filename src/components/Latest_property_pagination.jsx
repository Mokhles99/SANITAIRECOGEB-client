import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/product.actions';
import { addToCarttwo } from '../actions/carttwo.actions'; 
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { AiOutlineCheckCircle } from "react-icons/ai";
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '600px',
  bgcolor: '#122023',
  color: 'rgb(201, 150, 26)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};
const confirmationModalStyle = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  bgcolor: 'white',
  color: 'black',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontSize: '1rem',
};

const LatestPropertyWithPagination = ({ products = [], activeTypes = [] }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const itemsPerPage = 8;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFilteredProducts(products); // Initialize with all products
  }, [products]);

  const handleFilterByType = (type) => {
    if (type === 'Tous') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.type === type));
    }
    setCurrentPage(0); // Reset to the first page
  };

  const handleAddToCart = (productId) => {
    const cartIdFromStorage = localStorage.getItem('cartId');
    if (!cartIdFromStorage) {
      console.error("Cart ID is not found in localStorage");
      return;
    }
    dispatch(addToCarttwo(cartIdFromStorage, productId, 1));

    setShowConfirmationModal(true);
    
    // Masquer le modal après 2 secondes
    setTimeout(() => {
      setShowConfirmationModal(false);
    }, 2000);
  };

  const handleProductClick = (productId) => {
    dispatch(getProductById(productId));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.floor(filteredProducts.length / itemsPerPage)));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);


  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  return (
    <div className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-3xl uppercase" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
              marginTop:"10rem"
            }}>Nos produits</h1>
          <h1 className="lg:text-4xl text-xl font-medium capitalize py-3" style={{
              fontFamily: "'Playfair Display', serif",
            }}>
            Sélection de produits
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5" style={{
              fontFamily: "'Playfair Display', serif",
            }}>
            Découvrez notre vaste gamme de produits, soigneusement sélectionnés pour répondre à tous vos besoins
          </p>
          {/* <p className="text-[#808080] lg:w-3/5" style={{
  fontFamily: "'Playfair Display', serif",
  fontSize: '1.1rem'  // Ajustez la taille comme vous le souhaitez
}}>
  Les dimensions disponibles pour le Grés sont : 
  <strong><u>60*120</u></strong>&nbsp;&nbsp;
  <strong><u>60*60</u></strong>&nbsp;&nbsp;
  <strong><u>30*60</u></strong>&nbsp;&nbsp;
  <strong><u>20*60</u></strong>
</p> */}
<p className="text-[#1e90ff] font-bold lg:w-3/5" style={{
  fontFamily: "'Playfair Display', serif",
  fontSize: '1.1rem'  // Ajustez la taille comme vous le souhaitez
}}>
  Les dimensions disponibles pour le Grés sont : 
  <strong><u>60*120</u></strong>&nbsp;&nbsp;
  <strong><u>60*60</u></strong>&nbsp;&nbsp;
  <strong><u>30*60</u></strong>&nbsp;&nbsp;
  <strong><u>20*60</u></strong>
</p>

        </div>
        {activeTypes.length > 0 && (
          <div className="grid grid-cols-3 gap-3 lg:w-2/5 lg:pt-0 pt-6">
            {activeTypes.map((type, index) => (
              <button
                key={index}
                className="text-[#001F75] rounded-full border border-[#001F75] px-1 py-2 hover:bg-[#001F75] hover:text-white focus:bg-[#001F75] focus:text-white"
                onClick={() => handleFilterByType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      <section className="mt-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"> */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {selectedProducts.map((product, index) => (
            <div key={index} className="shadow-lg rounded-3xl" onClick={() => handleProductClick(product._id)}>
              <div className="relative h-80 w-full rounded-3xl">
                {/* <img
                  src={product.files[0]?.url}
                  alt={product.name}
                  className="rounded-t-3xl h-full w-full object-cover"
                /> */}
                  {product.files && product.files.length > 0 ? (
                 <img
          src={product.files[0].url}
          alt={product.name}
          className="rounded-t-3xl h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-t-3xl">
          <p className="text-gray-500">Image non disponible</p>
        </div>
      )}
                {product.categorie === 'Premium' && (
              <button className="px-3 py-1 flex gap-x-1 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10 text-sm">
              <FaStar className="text-xs" />
              Premium
            </button>
            
                )}
              </div>
              <div className="bg-gray-190 p-4 rounded-3xl">
                <span className="flex flex-col gap-y-1 py-4">
                  <p className="text-2xl font-medium text-gray-700">{product.name}</p>
                  <p className="text-lg font-medium text-gray-700">{product.description}</p>
                  <p className="text-sm text-gray-700">{product.location}</p>
                  <button 
                    onClick={() => handleAddToCart(product._id)} 
                    className="mt-2 py-2 bg-[#ACB1AE] text-white rounded-full hover:bg[#019834]"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      textAlign: 'center', 
                      margin: '0 auto', 
                      width: '45%' 
                    }}
                  >
                    Ajouter au <MdOutlineShoppingCart style={{ marginLeft: '8px' }} />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-12">
          <button
            onClick={handlePrevPage}
            className="text-[#001F75] rounded-full border border-[#001F75] px-3 py-2 focus:bg-[#001F75] focus:text-white mr-2"
            disabled={currentPage === 0}
          >
            Précédent
          </button>
          <span className="mx-2">Page {currentPage + 1} sur {totalPages}</span>
          <button
            onClick={handleNextPage}
            className="text-[#001F75] rounded-full border border-[#001F75] px-6 py-2 focus:bg-[#001F75] focus:text-white"
            disabled={startIndex + itemsPerPage >= filteredProducts.length}
          >
            Suivant
          </button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedProduct && (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
  src={selectedProduct?.files?.[0]?.url || ''}
  alt={selectedProduct?.name || 'Image not available'}
  style={{ width: '40%', marginRight: '20px', borderRadius: '30px' }}
/>

                <div style={{ textAlign: 'left' }}>
                  <h2 id="modal-modal-title">
                    <span style={{ color: 'gold', fontWeight: 'bold' }}>Produit:</span>
                    <span style={{ color: 'silver' }}>{selectedProduct.name}</span>
                  </h2>
                  <p id="modal-modal-description" style={{ color: 'silver', textAlign: 'justify' }}>
                    <span style={{ color: 'gold', fontWeight: 'bold' }}>Détails:</span>
                    <span>{selectedProduct.description}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        aria-labelledby="confirmation-modal-title"
      >
        <Box sx={confirmationModalStyle}>
          <AiOutlineCheckCircle color="green" size={30} />
          <span>Produit ajouté au panier</span>
        </Box>
      </Modal>
    </div>
  );
};

export default LatestPropertyWithPagination;
