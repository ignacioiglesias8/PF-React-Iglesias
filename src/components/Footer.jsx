import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLinks">
                <Link to='/' className="me-4">Home</Link>
                <Link to='/tours' className="me-4">Excursiones</Link>
                <a href="#top" className="me-4">Ir arriba</a>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Warmi Sumaj Tours. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;



