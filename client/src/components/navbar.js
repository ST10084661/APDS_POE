import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import './style.css';
export default function Navbar() {
 return (
 
   <div>
    <h1 className="center">G O V E R N M E N T   S Y S T E M S</h1>
     <nav className="navbar">
    <ul>

    <li className="navbar">
  
      <NavLink to="/create">
       Create Record
      </NavLink>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </li>
  </ul>
</nav>
</div>
 );
}