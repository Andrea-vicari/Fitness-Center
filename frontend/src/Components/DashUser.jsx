import React from "react";


function DashUser(){

    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <h1 className="text-body-emphasis">Benvenuto a bordo!</h1>
            <hr className="col-3 col-md-2 mb-3 text-white"/>

            <div className="row g-5">
            <div className="col-md-6">
                  <p className="text-body-emphasis">Questa è l'Area principale dove puoi comodamente trovare tutte le tue schede allenamento, prenotare la tuo prossima lezione e consultare le nostre guide personalizzate</p>
                  <hr className="col-3 col-md-2 mb-3"/>
                  <h3 className="text-body-emphasis">Schede Allenamento</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-arrow-right fs-4 text-danger"></i>
                    Scheda Corrente
                    </a>
                </li>
                                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-arrow-right fs-4 text-danger"></i>
                    Schede Completate
                    </a>
                </li>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-body-emphasis">Prenota Lezione</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-calendar fs-4 text-danger"></i>
                    Clicca e prenota
                    </a>
                </li>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                  <h3 className="text-body-emphasis">Schede Allenamento</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-arrow-right fs-4 text-danger"></i>
                    Scheda Corrente
                    </a>
                </li>
                                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-arrow-right fs-4 text-danger"></i>
                    Schede Completate
                    </a>
                </li>

                </ul>
            </div>
            </div>
        </div>
    )

}

export default DashUser