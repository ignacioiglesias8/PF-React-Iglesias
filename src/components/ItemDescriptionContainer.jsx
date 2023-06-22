import React, {useState, useEffect} from "react";
import Description from "./Description";
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loader from "./Loader";

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
                setPack(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .then(()=>{
                setLoading(false)
            })
    },)

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