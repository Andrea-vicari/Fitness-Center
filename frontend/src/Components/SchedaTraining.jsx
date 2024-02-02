import { Link } from 'react-router-dom'


function SchedaTraining(){

    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <h1 className="text-body-emphasis text-center">Scheda Allenamento</h1>
            <hr className="col-3 col-md-2 text-white mx-auto"/>
            <h4 className="text-body-emphasis text-center">Data Inizio:</h4>
            <h4 className="text-body-emphasis text-center">Ulrimo Allenamento:</h4>
            <p className="text-body-emphasis text-center">Clicca su ogni singolo allenameto per iniziarlo</p>
            <hr className="col-3 col-md-2 text-white mx-auto"/>
            <div className="d-flex justify-content-center align-items-center">
                <div className="bg-dark p-3 rounded w-100 text-white">
                <ul className="list-unstyled ps-0">
                    <li>
                        <a className="fs-3 icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                        <i className="fa fa-arrow-right fs-1 text-danger"></i>
                        Chest Press
                        </a>
                    </li>
                    <li>
                        <a className="fs-3 icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                        <i className="fa fa-arrow-right fs-1 text-danger"></i>
                        Chest Press
                        </a>
                    </li>

                </ul>



                </div>
            </div>
        </div>
    )

}

export default SchedaTraining