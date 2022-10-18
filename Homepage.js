import React,{useState} from "react";
import Navbar from "./Navbar";

import {Outlet} from "react-router-dom";

const Homepage=()=> {
    const [puppies,setPuppyPlayers]=useState([""])
    
    
    return (
        <div> 
            <h1> WELCOME TO PUPPY BOWL 🏈</h1>
            <Navbar/>
            <p>Content shown below! </p>
            <Outlet context={[puppies,setPuppyPlayers]}/>
        </div>
    ) 
}
 export default Homepage;