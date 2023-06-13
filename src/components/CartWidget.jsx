import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
    <div className="cartWidget">
        <Link to='/cart'><FontAwesomeIcon className="cartWidget" icon={faCartFlatbedSuitcase} /></Link>
        <span>0</span>
    </div>
    );
};

export default CartWidget;