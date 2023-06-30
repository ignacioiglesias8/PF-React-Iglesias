import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import ItemListContainer from "../components/ItemListContainer";
import ItemDescriptionContainer from '../components/ItemDescriptionContainer';
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Tours from '../pages/Tours';
import { getTourBySubCategory } from "../assets/txt/toursText";

const MainRouter = () => {
  const { subCategoryId } = useParams();

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element= {<Home/>}/>
          <Route path="/tours" element= {<Tours/>}/> 
          <Route path='/item/:itemId' element= {<ItemDescriptionContainer/>}/> 
          <Route path='/subcategoria/:subCategoryId' element={<ItemListContainer title={subCategoryId} getTours={getTourBySubCategory} />}/> 
          <Route exact path="/cart" element= {<Cart/>}/>
          <Route exact path="/checkout" element= {<Checkout/>}/>
          <Route path='*' element= {<h1>Error</h1>}/> 
        </Routes>
        <Footer />  
      </BrowserRouter>
  );
};

export default MainRouter;