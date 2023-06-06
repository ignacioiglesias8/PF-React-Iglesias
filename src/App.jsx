import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDescriptionContainer from './components/ItemDescriptionContainer';
import Footer from './components/Footer';

const App = () => {
// entiendo que la ruta de la línea 17 es '/subcategoria/:subCategoryId'
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element= {<ItemListContainer title="Packs turísticos"/>}/> 
          <Route path='/category/:subCategoryId' element= {<ItemListContainer title="Packs turísticos"/>}/> 
          <Route path='/item/:itemId' element= {<ItemDescriptionContainer/>}/> 
          <Route path='*' element= {<h1>Error</h1>}/> 
        </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
};

export default App;
