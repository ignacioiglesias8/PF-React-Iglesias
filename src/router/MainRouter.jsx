import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDescriptionContainer from '../components/ItemDescriptionContainer';
import Footer from '../components/Footer';
import Home from "../pages/Home";
import Excursiones from '../pages/Excursiones';
import { getTourBySubCategory } from "../listadoTours";

const MainRouter = () => {
  const { subCategoryId } = useParams();

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element= {<Home/>}/>
          <Route path="/excursiones" element= {<Excursiones/>}/> 
          <Route path='/item/:itemId' element= {<ItemDescriptionContainer/>}/> 
          <Route path='/subcategoria/:subCategoryId' element={<ItemListContainer title={subCategoryId} getTours={getTourBySubCategory} />}/> 
          <Route path='*' element= {<h1>Error</h1>}/> 
        </Routes>
        <Footer />  
      </BrowserRouter>
  );
};

export default MainRouter;