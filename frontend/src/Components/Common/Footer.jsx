import React from "react";
import { Link } from "react-router-dom";
import logo from "../Common/logo_fitness.svg";


function Footer(){

return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 mt-4 border-top bg-dark">
                <div className="col-md-4 d-flex align-items-center">
          <Link className="navbar-brand d-flex" to={'/'}>
            <img src={logo} style={{width:150}}/>
          </Link>
                <span className="mb-3 mb-md-0 text-white-50">© 2024 Fitness Club</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className=" fs-4 text-white fab fa-instagram"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className=" fs-4 text-white fab fa-facebook"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
                </ul>
          <button id="myBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='btn btn-sm btn-outline-secondary'>
            <i className="bi bi-arrow-bar-up"></i>
          </button>
            </footer>
        </div>

)
}

export default Footer
