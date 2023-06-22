import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = ({ title }) => {
    const [tours,setTours] = useState([])
    const [loading, setLoading] = useState(true)
    const {subCategoryId} = useParams()

    useEffect(() => {
    const db = getFirestore()
    const collectionRef = subCategoryId
        ? query(collection(db,'tours'), where ('subcategoria', '==', subCategoryId))
        : collection(db,'tours')
    
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data();
                    return {id: doc.id, ...data}
                })
                setTours(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .then(()=>{
                setLoading(false)
            })
    },)

    return (
    <div className="listContainer">
            <h1>{title}</h1>
            <h1>{subCategoryId}</h1>       
        {loading ? (
            <Loader/>
        ):(
            <ItemList tours={tours}/>
        )}
    </div>
    );
};

export default ItemListContainer;