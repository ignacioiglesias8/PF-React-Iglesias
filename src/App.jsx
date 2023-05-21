import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Packs turísticos"/>
    </div>
  );
};

export default App;
