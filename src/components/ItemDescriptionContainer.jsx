import React, {useState, useEffect} from "react";
import Description from "./Description";
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loader from "./Loader";
import {getTourById} from "../assets/txt/toursText";

const ItemDescriptionContainer = () => {
    const[pack, setPack] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const docRef =doc(db,'tours', itemId)

        getDoc(docRef)
            .then(response=>{
                const data =response.data()
                const productsAdapted = {id:response.id, ...data}
                getTourById(itemId)
                    .then (tour =>{
                        if (tour) {
                            productsAdapted.descripcion = tour.descripcion;
                        }
                        setPack(productsAdapted)
                    })
            })
            .catch(error =>{
                console.log(error)
            })
            .then(()=>{
                setLoading(false)
            })
}, [itemId]);

    return (
        <div className="itemDescriptionContainer">
                    {loading ? (
            <Loader/>
        ):(
            <Description {...pack}/>
        )}
        </div>
    );
};

export default ItemDescriptionContainer;