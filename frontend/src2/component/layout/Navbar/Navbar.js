import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiShoppingBag } from 'react-icons/gi';
import { FiHeart } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { FaOutdent } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaRegUserCircle } from 'react-icons/fa';
import "./Navbar.css";
import logo from '../../../images/logo.png'


function Navbar() {
  return (
    <div>
      <section id="header">
      <a href="#">
        {/* <img
          src={logo}
          class="logo"
          alt=""
          width="150px"
          height="90px"/> */}
          <h4>Ribadiya Brothers</h4>

        </a>

        <div>

          <ul id="navbar">
            <li><NavLink class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>

            <li id="bag">
              <NavLink to="/bag">
                <i><GiShoppingBag /></i>
              </NavLink>
            </li>
            
            <li id="search">
              <NavLink to="/search">
                <i><FiHeart /></i>
              </NavLink>
            </li>
            <NavLink to="/" id="close">
              <i><FaTimes /></i>
            </NavLink>
          </ul>

        </div>
        <div id="mobile">
          <NavLink to="/bag"><i><GiShoppingBag /></i></NavLink>
          <NavLink to="/search"><i><FiHeart /></i></NavLink>
          <i id="bar"><FaOutdent /></i>
        </div>

      </section>
    </div>
  );
}

export default Navbar;