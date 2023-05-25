import {useState, useEffect} from "react";
import {getTours} from "../listadoTours";
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {
    const [tours,setTours] = useState([])
    
    useEffect(() => {
        getTours()
            .then(response =>{
                setTours(response)
            })
            .catch (error => {
                console.error(error)
            })
    }, [])
    
    return (
    <div className="listContainer">
        <h1>{greeting}</h1>
        <ItemList tours={tours}/>
    </div>
    );
};

export default ItemListContainer;