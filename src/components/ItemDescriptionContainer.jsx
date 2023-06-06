import {useState, useEffect} from "react";
import {getTourById} from "../listadoTours";
import Description from "./Description";
import {useParams} from 'react-router-dom'

const ItemDescriptionContainer = () => {
    const[pack, setPack] = useState(null)

    const {itemId} = useParams();

    useEffect(() => {
        getTourById(itemId) 
        .then(response =>{
            setPack(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])

    return (
        <div className="itemDescriptionContainer">

            <Description {...pack}/>
        </div>
    );
};

export default ItemDescriptionContainer;