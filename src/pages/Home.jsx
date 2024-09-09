import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/product.actions';
import Become_an_agent from "../components/Become_an_agent";
import Footer from "../components/Footer";
import Latest_property from "../components/Latest_property";
import LatestPropertyWithPagination from "../components/Latest_property_pagination";
import Navbar from "../components/Navbar";
import Neighborhood_properties from "../components/Neighborhood_properties";
import Real_estate from "../components/Real_estate";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Who_are_we from "../components/Who_are_we";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <main>
        <Real_estate />
        <Who_are_we />
        <Neighborhood_properties products={products}   id="produits" />
        <Latest_property />
        <Services />
        {/* <LatestPropertyWithPagination products={products} /> */}
        {/* <Team /> */}
        <Testimonials />
        <Become_an_agent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
