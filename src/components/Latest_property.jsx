
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getAllProducts } from '../actions/product.actions';
// // import { FaFire, FaDollarSign } from "react-icons/fa";
// // import { FaHouse } from "react-icons/fa6";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// // const responsive = {
// //   superLargeDesktop: {
// //     breakpoint: { max: 4000, min: 1400 },
// //     items: 3.2,
// //   },
// //   desktop: {
// //     breakpoint: { max: 1400, min: 1024 },
// //     items: 3,
// //   },
// //   mini: {
// //     breakpoint: { max: 1024, min: 768 },
// //     items: 2.2,
// //   },
// //   tablet: {
// //     breakpoint: { max: 768, min: 640 },
// //     items: 1.7,
// //   },
// //   module: {
// //     breakpoint: { max: 640, min: 0 },
// //     items: 1,
// //   },
// // };

// // const CustomLeftArrow = ({ onClick }) => {
// //   return (
// //     <button className="carousel-arrow left-0" onClick={onClick}>
// //       &#9664;
// //     </button>
// //   );
// // };

// // const CustomRightArrow = ({ onClick }) => {
// //   return (
// //     <button className="carousel-arrow right-0" onClick={onClick}>
// //       &#9654;
// //     </button>
// //   );
// // };

// // const Latest_property = () => {
// //   const dispatch = useDispatch();
// //   const products = useSelector((state) => state.product.products);

// //   useEffect(() => {
// //     dispatch(getAllProducts());
// //   }, [dispatch]);

// //   useEffect(() => {
// //     console.log(products); // Afficher l'état complet dans la console
// //   }, [products]);

// //   return (
// //     <div className="container mx-auto px-3">
// //       <style>
// //         {`
// //           .carousel-arrow {
// //             color: black;
// //             border-radius: 40%;
// //             padding: 10px;
// //             display: inline-flex;
// //             justify-content: center;
// //             align-items: center;
// //             cursor: pointer;
// //             position: absolute;
// //             top: 50%;
// //             transform: translateY(-50%);
// //             z-index: 1;
// //             transition: background-color 0.3s, color 0.3s;
// //           }
// //           .carousel-arrow:hover {
// //             background-color: black;
// //             color: white;
// //           }
// //           .carousel-arrow.left-0 {
// //             left: 10px;
// //           }
// //           .carousel-arrow.right-0 {
// //             right: 10px;
// //           }
// //         `}
// //       </style>
// //       <div className="lg:flex justify-between items-center">
// //         <div className="lg:w-3/5">
// //           <h1 className="text-[#6f9789] lg:text-3xl uppercase" style={{
// //             fontFamily: "'Playfair Display', serif",
// //             letterSpacing: "0.3em",
// //           }}>Les plus recommandés</h1>
// //           <h1 className="lg:text-4xl text-xl font-medium capitalize py-3" style={{
// //             fontFamily: "'Playfair Display', serif",
// //           }}>
// //             Produits Premium
// //           </h1>
// //           <p className="text-[#808080] lg:text-base text-sm lg:w-3/5" style={{
// //             fontFamily: "'Playfair Display', serif",
// //           }}>
// //             Découvrez notre sélection de produits premium, soigneusement choisis pour leur qualité exceptionnelle
// //           </p>
// //         </div>
// //       </div>

// //       <section className="mt-8">
// //         <Carousel
// //           className="z-20"
// //           swipeable={true}
// //           draggable={false}
// //           responsive={responsive}
// //           ssr={true}
// //           infinite
// //           autoPlay={true}
// //           keyBoardControl={true}
// //           customTransition="all .5"
// //           transitionDuration={500}
// //           customLeftArrow={<CustomLeftArrow />}
// //           customRightArrow={<CustomRightArrow />}
// //         >
// //           {products && products.map((product) => (
// //             <div key={product._id}>
// //               <div className="relative h-80 sm:w-80">
// //                 <img
// //                   src={product.files[0].url}
// //                   alt={product.name}
// //                   className="rounded-3xl h-full w-full object-cover"
// //                 />
// //                 <button className={`px-6 py-2 flex gap-x-2 items-center bg-red-500 text-white rounded-full absolute bottom-10 left-10`}>
// //                   <FaFire />
// //                   {product.famille}
// //                 </button>
// //               </div>
// //               <span className="flex flex-col gap-y-1 py-4">
// //                 <p className="text-2xl font-medium">{product.name}</p>
// //                 <p className="text-lg font-medium">{product.description}</p>
// //                 {/* Remplacez cela par l'adresse correcte si elle est disponible */}
// //                 {/* <p className="text-sm">{product.address}</p> */}
// //               </span>
// //             </div>
// //           ))}
// //         </Carousel>

// //         <div className="sm:hidden block ">
// //           {products && products.map((product) => (
// //             <div className='pt-8' key={product._id}>
// //               <div className="relative h-80 sm:w-80">
// //                 <img
// //                   src={product.files[0].url}
// //                   alt={product.name}
// //                   className="rounded-3xl h-full w-full object-cover"
// //                 />
// //                 <button className={`px-6 py-2 flex gap-x-2 items-center bg-red-500 text-white rounded-full absolute bottom-10 left-10`}>
// //                   <FaFire />
// //                   {product.famille}
// //                 </button>
// //               </div>
// //               <span className="flex flex-col gap-y-1 py-4">
// //                 <p className="text-2xl font-medium">{product.name}</p>
// //                 <p className="text-lg font-medium">{product.description}</p>
// //                 {/* Remplacez cela par l'adresse correcte si elle est disponible */}
// //                 {/* <p className="text-sm">{product.address}</p> */}
// //               </span>
// //             </div>
// //           ))}
// //           <div className="flex justify-center pt-12">
// //             <button className="text-[#001F75] rounded-full border border-[#001F75] px-6 py-2 focus:bg-[#001F75] focus:text-white">
// //               View more properties
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Latest_property;

///en haut statique
/// en bas dynamique

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/product.actions";
import { FaFire, FaDollarSign, FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addToCarttwo } from '../actions/carttwo.actions'; 
import { MdOutlineShoppingCart } from "react-icons/md";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 3.2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  mini: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1.7,
  },
  module: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="carousel-arrow left-0" onClick={onClick}>
      &#9664;
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="carousel-arrow right-0" onClick={onClick}>
      &#9654;
    </button>
  );
};

const Latest_property = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [category, setCategory] = useState("Premium");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products); // Afficher l'état complet dans la console
  }, [products]);

  const filteredProducts = products.filter(
    (product) => product.categorie === "Premium"
  );
  const handleAddToCart = (productId) => {
    const cartIdFromStorage = localStorage.getItem('cartId');
    if (!cartIdFromStorage) {
      console.error("Cart ID is not found in localStorage");
      return;
    }
    dispatch(addToCarttwo(cartIdFromStorage, productId, 1));
  };

  return (
    <div className="container mx-auto px-3">
      <style>
        {`
          .carousel-arrow {
            color: black;
            border-radius: 40%;
            padding: 10px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            transition: background-color 0.3s, color 0.3s;
          }
          .carousel-arrow:hover {
            background-color: black;
            color: white;
          }
          .carousel-arrow.left-0 {
            left: 10px;
          }
          .carousel-arrow.right-0 {
            right: 10px;
          }
        `}
      </style>
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1
            className="text-[#6f9789] lg:text-3xl uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
              marginTop: "12rem",
            }}
          >
            Les plus recommandés
          </h1>
          <h1
            className="lg:text-4xl text-xl font-medium capitalize py-3"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Produits Premium
          </h1>
          <p
            className="text-[#808080] lg:text-base text-sm lg:w-3/5"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Découvrez notre sélection de produits premium, soigneusement choisis
            pour leur qualité exceptionnelle
          </p>
        </div>
      </div>

      <section className="mt-8">
        <Carousel
          className="z-20"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div key={product._id} className="shadow-lg rounded-3xl overflow-hidden">
                <div className="relative h-80 w-full ">
                  {product.files && product.files.length > 0 ? (
                    <img
                      src={product.files[0].url}
                      alt={product.name}
                      className="rounded-3xl h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-3xl">
                      <p className="text-gray-500">Image non disponible</p>
                    </div>
                  )}
                  {product.categorie === "Premium" && (
                    <button className="px-3 py-1 flex gap-x-1 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10 text-sm">
                      <FaStar className="text-xs" />
                      Premium
                    </button>
                  )}
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                  <p className="text-2xl font-medium">{product.name}</p>
                  <p className="text-lg font-medium">{product.description}</p>
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
            ))}
        </Carousel>

        <div className="sm:hidden block ">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div className="pt-8" key={product._id}>
                <div className="relative h-80 sm:w-80">
                  {product.files && product.files.length > 0 ? (
                    <img
                      src={product.files[0].url}
                      alt={product.name}
                      className="rounded-3xl h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-3xl">
                      <p className="text-gray-500">Image non disponible</p>
                    </div>
                  )}
                  {product.categorie === "Premium" && (
                    <button className="px-3 py-1 flex gap-x-1 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10 text-sm">
                      <FaStar className="text-xs" />
                      Premium
                    </button>
                  )}
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                  <p className="text-2xl font-medium">{product.name}</p>
                  <p className="text-lg font-medium">{product.description}</p>
                </span>
              </div>
            ))}
          <div className="flex justify-center pt-12">
       
          </div>
        </div>
      </section>
    </div>
  );
};

export default Latest_property;
