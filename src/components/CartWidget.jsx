import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
    <div className="cartWidget">
        <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
        <span>0</span>
    </div>
    );
};

export default CartWidget;