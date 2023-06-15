import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MainRouter from './router/MainRouter';
import { CartProvider} from './context/CartContext';

const App = () => {

  return (
    <div className="App">
    <CartProvider>
      <MainRouter />
    </CartProvider>
    </div>
  );
};

export default App;
