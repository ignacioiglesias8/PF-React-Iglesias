import {useState, useEffect} from "react";
import {getTours, getTourBySubCategory} from "../listadoTours";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';

const ItemListContainer = ({ title }) => {
    const [tours,setTours] = useState([])

    const {subCategoryId} = useParams()
    
    useEffect(() => {
        const asyncFunc = subCategoryId ? getTourBySubCategory : getTours

    asyncFunc(subCategoryId)
        .then(response => {
            setTours(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [subCategoryId])
    
    return (
    <div className="listContainer">
        <h1>{title}</h1>
        <ItemList tours={tours}/>
    </div>
    );
};

export default ItemListContainer;