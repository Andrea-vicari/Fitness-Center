import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";
import { UseAuthContext } from "../hooks/UseAuthContext"

function HomeUser() {

  const {user} = UseAuthContext()


  return (
    <div className="col-md-6 pb-4">
            {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
            <div className="bg-dark p-3 w-100 text-white pb-5">
                  <h3 className="text-danger">Scheda Allenamento</h3>

                  <p className="text-white">Clicca per accedere alla scheda</p>

                <ul className="list-unstyled ps-0">

                  <Link className="icon-link mb-1 text-decoration-none text-white" to="/elencoschedeaperte">

                      <i className="fa fa-arrow-right fs-4 text-danger"></i>
                      <span className="text-white fs-4">Vai alla scheda</span>

                  </Link>

                </ul>
                <hr className="col-3 col-md-2 mb-3 w-100"/>
                <h3 className="text-danger">Storico Schede</h3>
                <p className="text-white">Elenco delle schede completate</p>
                <ul className="list-unstyled ps-0">
                 <Link className="icon-link mb-1 text-decoration-none text-white" to="/elencoschedechiuse">
                 <i className="fa fa-arrow-right fs-4 text-danger"></i>
                  <span className="text-white fs-4">Schede Completate</span>
                </Link>
                </ul>

            </div>

    </div>
  )
}

export default HomeUser