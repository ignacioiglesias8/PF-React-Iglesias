import React from "react";

const Button = ({label, handleCLick, customClass}) => {
    return (
    <button className= {customClass} onClick={handleCLick}>
        {label}
    </button>
    );
};

export default Button;