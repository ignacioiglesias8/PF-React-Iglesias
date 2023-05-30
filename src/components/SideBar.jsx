import React from "react";

const SideBar = ({ greeting }) => {
    return (
        <div className="sideBar">
        <h1>{greeting}</h1>
        </div>
    );
};

export default SideBar;