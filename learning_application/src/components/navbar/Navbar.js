import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";


function Navbar({ datas }) {
  const [ dropDown, setDropDown ] = useState(false);

  const handleDropDown=()=>
  {
    setDropDown(!dropDown);
  }
  return (
    <div className="navcontainer">
      <div className="profile"></div>
      <div className="options">
        {datas.map((data) => {
          return (
            <Link to="#" className="links">
              <span>{data.icon}</span>
              {data.name}
            </Link>
          );
        })}
      </div>
      <div className="end">
        <Link to="#" className="link1">
          <span className="notification">
            <span>0</span>
            <AiOutlineShoppingCart />
          </span>
          Cart
        </Link>
        

        <Link to="#" className="link1" onClick={handleDropDown}>
          <span>
            <BsPersonCircle />
          </span>
          Profile
        </Link>

        
        {dropDown && (
          <div className="dropdown-menu">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
        

        
      </div>
    </div>
  );
}

export default Navbar;
