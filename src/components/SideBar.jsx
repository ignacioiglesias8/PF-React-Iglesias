import React from "react";
import {useState, useEffect} from "react";
import {getTourById} from "../listadoTours";
import ItemSelected from "./ItemSelected";

const SideBar = ({ greeting }) => {
    const[packSelected, setPackSelected] = useState(null)

    useEffect(() => {
        getTourById('1') //packSelected (?)
        .then(response =>{
            setPackSelected(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className="sideBar">
            <h1>{greeting}</h1>
            <ItemSelected {...packSelected}/>
        </div>
    );
};

export default SideBar;