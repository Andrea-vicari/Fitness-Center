import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";
import { UseAuthContext } from "../hooks/UseAuthContext"

function HomeTrainer() {

  const {user} = UseAuthContext()

  return (
    <div className="col-md-6 pb-4 mx-auto">
            {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
            <div className="bg-dark p-3 w-100 text-white">
                  <h3 className="text-white">Elenco utenti</h3>
                  <p className="text-white">Clicca per elenco utenti</p>

                <ul className="list-unstyled ps-0">

                  <Link className="icon-link mb-1 text-decoration-none text-white" to="/elencoutenti">

                      <i className="fa fa-users fs-4 text-danger"></i>
                      <span className="text-white fs-4">Elenco utenti</span>

                  </Link>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-white">Prenotazioni</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-calendar fs-4 text-danger"></i>
                    Clicca e prenota
                    </a>
                </li>

                </ul>
            </div>

            </div>
  )
}

export default HomeTrainer