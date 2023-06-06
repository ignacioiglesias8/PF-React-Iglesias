import React from "react";
import {NavLink, Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLinks">
                <a className="me-4"><Link to='/'>Home</Link></a>
                <a className="me-4"><Link to='/excursiones'>Excursiones</Link></a>
                <a href="#top" className="me-4">Ir arriba</a>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Warmi Sumaj Tours. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;



