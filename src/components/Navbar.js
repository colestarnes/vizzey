import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { AiTwotoneBell, AiOutlineSearch } from 'react-icons/ai';
import './navbar.css';
function Navbar() {
  return (
    <nav id="nav-bar">
      <div className="container">
        <h2 className="homeBtn">VIZZEY</h2>
        <div className="search">   
          <input type="search" placeholder="Search" className="form-control" />
          <button className="searchBtn"><AiOutlineSearch/></button>
        </div>
        <ul className="ugh-buttons">
          <li className="btn">
            <button className="icon-btn">
              <FiMail/></button>
          </li>
          <li className="btn">
            <button className="icon-btn"><FaPlus/></button>
          </li>
          <li className="btn">
            <button className="icon-btn"><AiTwotoneBell/></button>
          </li>
          <li className="btn">
            <button className="icon-btn"><BsFillPersonFill/></button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;


    // <section className="search-bar">
    //   <div className="row">
    //     <div className="col-lg mx-auto"> 
    //       <form>
    //         <div>
    //           <div className="input-group">
    //             <div className="homeBtn">
    //             <h3>VIZZEY</h3> 
    //             </div> 

    //             <input type="search" placeholder="Search" className="form-control" />
    //             <button className="searchBtn">

    //               <FaSearch />

    //               </button>
    //             <div className="input-group-append buttons">


    //               <div className="icon">
    //                 <button className="icon-btn">
    //                   <h4><FiMail /></h4>
    //                 </button>
    //               </div>
    //               <div className="icon">
    //                 <button className="icon-btn">
    //                   <h4><FaPlus /></h4>
    //                 </button>
    //               </div>
    //               <div className="icon">
    //                 <button className="icon-btn">
    //                   <h4><AiTwotoneBell /></h4>
    //                 </button>
    //               </div>
    //               <div className="icon">
    //                 <button className="icon-btn">
    //                   <h4><BsFillPersonFill /></h4> 
    //                 </button>  
    //                 <div className="profileOptions"></div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>  