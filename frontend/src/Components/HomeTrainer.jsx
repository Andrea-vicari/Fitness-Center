import React from 'react'
import { Link } from 'react-router-dom'

function HomeTrainer() {
  return (
    <div className="col-md-6 pb-4">
            <div className="bg-dark p-3 rounded w-100 text-white">
                <h1>Trainer</h1>
                  <h3 className="text-white">Scheda Allenamento</h3>
                  <p className="text-white">Clicca per accedere alla scheda</p>

                <ul className="list-unstyled ps-0">

                  <Link className="icon-link mb-1 text-decoration-none text-white" to="/elencoschede">

                      <i className="fa fa-arrow-right fs-4 text-danger"></i>
                      <span className="text-white fs-4">Vai alla scheda</span>

                  </Link>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-white">Schede Completate</h3>
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