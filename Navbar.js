import React from "react";

import{Link} from "react-router-dom";
const Navbar=()=> {
    return(
        <nav> 
            <Link to="/">Homepage</Link>
            <Link to="about">About Us</Link>
            <Link to="Puppies">Puppies</Link>
        </nav>
    )
};
export default Navbar;

