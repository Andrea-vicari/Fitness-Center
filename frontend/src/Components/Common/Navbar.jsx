import React from "react";
import { Link } from "react-router-dom";
import logo from "../Common/logo_fitness.svg";

import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useLogout } from "../../hooks/useLogout";

function Navbar () {


    function hideMenu(){
      document.getElementById('navbarCollapse').classList.remove('show')
    }

    const { logout } = useLogout()

    const {user} = UseAuthContext()

    const handleLogout = () =>{
      logout()
      hideMenu()
    }

    return(

        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div className="container">
                <Link to="/" onClick={()=>hideMenu()}>
                <img className="navbar-brand" src={logo}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="offcanvasWithBothOptions" aria-expanded="true" aria-label="Toggle navigation">
                  <i className="fa fa-bars text-danger fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item" >
                      <Link to="/" className="nav-link" onClick={()=>hideMenu()}>Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/elencoschedeaperte"onClick={()=>hideMenu()}>Scheda Attuale</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/elencoschedechiuse"onClick={()=>hideMenu()}>Schede Completate</Link>
                    </li>

                  </ul>
                  {user && (
                    <div>
                      <div className="mb-3">
                        <i className="fa fa-user-alt text-white fs-5"> <small> {user.email}</small></i>
                        </div>
                      <div>
                        <i className="fa fa-toggle-off text-danger fs-4" onClick={()=>handleLogout()}><small className="text-white"> Logout</small></i>
                      </div>
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