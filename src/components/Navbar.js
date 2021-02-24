import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { AiTwotoneBell, AiOutlineSearch } from 'react-icons/ai';
import './navbar.css'; 

function profileBtn() {
  var element = document.getElementById("profileOptions");
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  };
}


function Navbar() {
  return (
    <div>
      <nav id="nav-bar">
        <div className="container">
          <h2 className="homeBtn">VIZZEY</h2>
          <div className="search">
            <input type="search" placeholder="Search" className="form-control" />
            <button className="searchBtn"><AiOutlineSearch /></button>
          </div>
          <ul className="ugh-buttons">
            <li className="btn">
              <button className="icon-btn">
                <FiMail /></button>
            </li>
            <li className="btn">
              <button className="icon-btn"><FaPlus /></button>
            </li>
            <li className="btn">
              <button className="icon-btn"><AiTwotoneBell /></button>
            </li>
            <li className="btn">
              <button id="profile" className="icon-btn" onClick={profileBtn}><BsFillPersonFill /></button>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="container">
          <h2 className="homeBtn"></h2>
          <div className="search">

          </div>
          <div id="profileOptions" className="container hide">
            <div className="card" style={{ width: "200px", height: "176px", border: "30px" }}>
                <button className="topProfileSettings">Profile</button>
                <button className="profileSettings">Following</button>
                <button className="profileSettings">Followers</button>
                <button className="profileSettings">Settings</button>
                <button className="bottomProfileSettings">Sign Out</button>
            </div>
          </div>
          {/* <li className="btn">
              <div className="dropdown">lol</div>
            </li> */}
        </div>
      </div>
    </div>

  )
}
export default Navbar;