import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { AiTwotoneBell } from 'react-icons/ai';
import './navbar.css';

function Navbar() {
  return (
    <section className="search-bar">
      <div className="row">
        <div className="col-lg mx-auto"> 
          <form>
            <div>
              <div className="input-group">
                <div className="homeBtn">
                <h3>VIZZEY</h3> 
                </div> 
              
                <input type="search" placeholder="Search" className="form-control" />
                <button className="searchBtn">
                  
                  <FaSearch />

                  </button>
                <div className="input-group-append buttons">
                
                  
                  <div className="icon">
                    <button className="icon-btn">
                      <h4><FiMail /></h4>
                    </button>
                  </div>
                  <div className="icon">
                    <button className="icon-btn">
                      <h4><FaPlus /></h4>
                    </button>
                  </div>
                  <div className="icon">
                    <button className="icon-btn">
                      <h4><AiTwotoneBell /></h4>
                    </button>
                  </div>
                  <div className="icon">
                    <button className="icon-btn">
                      <h4><BsFillPersonFill /></h4>
                    </button> 
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>  
  )
}
export default Navbar;