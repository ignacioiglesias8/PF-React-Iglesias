import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import SideBar from './components/SideBar';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Packs turísticos"/>
      <SideBar greeting="SideBar"/>
      <Footer />
    </div>
  );
};

export default App;
