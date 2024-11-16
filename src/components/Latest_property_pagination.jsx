import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'; // Import pour les traductions
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
  const { t } = useTranslation(); // Utilisation des traductions
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const itemsPerPage = 8;
  const [open, setOpen] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    setFilteredProducts(products); // Initialiser avec tous les produits
  }, [products]);

  const handleFilterByType = (type) => {
    if (type === 'Tous') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.type === type));
    }
    setCurrentPage(0); // Réinitialiser à la première page
  };

  const handleAddToCart = (productId) => {
    const cartIdFromStorage = localStorage.getItem('cartId');
    if (!cartIdFromStorage) {
      console.error(t("error.cartNotFound"));
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

  return (
    <div className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-3xl uppercase" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
              marginTop:"10rem"
            }}>{t("products.title")}</h1>
          <h1 className="lg:text-4xl text-xl font-medium capitalize py-3" style={{
              fontFamily: "'Playfair Display', serif",
            }}>
            {t("products.subtitle")}
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5" style={{
              fontFamily: "'Playfair Display', serif",
            }}>
            {t("products.description")}
          </p>
          <p className="text-[#1e90ff] font-bold lg:w-3/5" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem'
          }}>
            {t("products.dimensions")}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {selectedProducts.map((product, index) => (
            <div key={index} className="shadow-lg rounded-3xl" onClick={() => handleProductClick(product._id)}>
              <div className="relative h-80 w-full rounded-3xl">
                {product.files && product.files.length > 0 ? (
                  <img
                    src={product.files[0].url}
                    alt={product.name}
                    className="rounded-t-3xl h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-t-3xl">
                    <p className="text-gray-500">{t("products.imageNotAvailable")}</p>
                  </div>
                )}
                {product.categorie === 'Premium' && (
                  <button className="px-3 py-1 flex gap-x-1 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10 text-sm">
                    <FaStar className="text-xs" />
                    {t("products.premium")}
                  </button>
                )}
              </div>
              <div className="bg-gray-190 p-4 rounded-3xl">
                <span className="flex flex-col gap-y-1 py-4">
                  <p className="text-2xl font-medium text-gray-700">{product.name}</p>
                  <p className="text-lg font-medium text-gray-700">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product._id)} 
                    className="mt-2 py-2 bg-[#ACB1AE] text-white rounded-full hover:bg-[#019834]"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto', width: '45%' }}
                  >
                    {t("products.addToCart")} <MdOutlineShoppingCart style={{ marginLeft: '8px' }} />
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
            {t("pagination.previous")}
          </button>
          <span className="mx-2">
            {t("pagination.page")} {currentPage + 1} {t("pagination.of")} {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="text-[#001F75] rounded-full border border-[#001F75] px-6 py-2 focus:bg-[#001F75] focus:text-white"
            disabled={startIndex + itemsPerPage >= filteredProducts.length}
          >
            {t("pagination.next")}
          </button>
        </div>
      </section>

      {/* Modals */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {selectedProduct && (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={selectedProduct?.files?.[0]?.url || ''}
                  alt={selectedProduct?.name || t("products.imageNotAvailable")}
                  style={{ width: '40%', marginRight: '20px', borderRadius: '30px' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <h2>{t("products.product")}: {selectedProduct.name}</h2>
                  <p>{t("products.details")}: {selectedProduct.description}</p>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
      <Modal open={showConfirmationModal} onClose={() => setShowConfirmationModal(false)}>
        <Box sx={confirmationModalStyle}>
          <AiOutlineCheckCircle color="green" size={30} />
          <span>{t("products.addedToCart")}</span>
        </Box>
      </Modal>
    </div>
  );
};

export default LatestPropertyWithPagination;
