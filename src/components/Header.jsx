import React from 'react'
import logo from '../assets/Logo.png';
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (

    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Kerko produktin...'/>
        </div>
        <div className='thirdPart'>
            <FontAwesomeIcon icon={faHeart}   style={{ color: "#ffffffff", fontSize: "24px", margin: "0px 5px" }}/>
            <FontAwesomeIcon icon={faCartShopping}   style={{ color: "#ffffffff", fontSize: "24px", margin: "0px 5px" }}/>
            <FontAwesomeIcon icon={faUser}   style={{ color: "#ffffffff", fontSize: "24px", margin: "0px 5px" }}/>
        </div>
    </div>


  )
}

export default Header