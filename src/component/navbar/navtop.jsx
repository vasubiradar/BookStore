import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './navtop.css'

const NavTop = ({sticky}) => {
    return (
        <nav className="Akanksha"> <div className="container text-light">
                
                <Link className="biradar" to={"/contact"}>✉ Contact Us
                     </Link>
                  
                   
              
            </div>
        </nav>
        

    );
}

export default NavTop;