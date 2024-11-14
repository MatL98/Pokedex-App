import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom";
import pokeImg from "../../img/pokedex.png"

const NavBar = () =>{
    return (
    <div className="divNavBar">
        <Link className="navBar-position" to="/" key="1"><img src={pokeImg} className="pokeImg" alt="" />
        <h1>POKEDEX-APP</h1>    
        </Link> 
    </div>
    )
}
export default NavBar;