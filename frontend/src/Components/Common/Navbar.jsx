import React from "react";
import { Link } from "react-router-dom";
import logo from "../Common/logo_fitness.svg";



import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useLogout } from "../../hooks/useLogout";

function Navbar () {

    const { logout } = useLogout()

    const {user} = UseAuthContext()

    const handleLogout = () =>{
      logout()
    }

    return(

        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div className="container">
                <img className="navbar-brand" href="#" src={logo}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars text-danger fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  {user && (
                    <div>

                        <p className="text-white">{user.email}</p>


                        <i className="fa fa-user-alt text-white fs-4" onClick={handleLogout}><span className="mx-2">Logout</span></i>
                      </div>
                  )
                  }
                </div>
              </div>
            </nav>
        </header>
    )
}

export default Navbar;