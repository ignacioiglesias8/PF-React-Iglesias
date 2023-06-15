import Button from "./Button.jsx";
import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial) 
    
    const sumar = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const restar = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    
    return (
    <div className="counter">
        <div className="controls">
            <Button label={"-"} customClass="button" handleCLick={restar}/>
            <span className="number">{quantity}</span>
            <Button label={"+"} customClass="button" handleCLick={sumar}/>
        </div>
        <div className="agregar">
            <Button label={"Agregar"} customClass="button" handleCLick={()=>onAdd (quantity)} disabled={!stock}/>
        </div>
    </div>
    );
};

export default ItemCount;