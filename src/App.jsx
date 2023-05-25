import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Packs turísticos"/>
        <div className='contador'>
          <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
        </div>
    </div>
  );
};

export default App;
