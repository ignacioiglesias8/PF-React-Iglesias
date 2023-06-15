import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { totalQuantity} = useContext (CartContext) 
    
    return (
    <div className="cartWidget" style={{display: totalQuantity > 0 ? 'flex' : 'none' }}>
        <Link to='/cart'><FontAwesomeIcon className="cartWidget" icon={faCartFlatbedSuitcase} /></Link>
        <div>{totalQuantity}</div>
    </div>
    );
};

export default CartWidget;