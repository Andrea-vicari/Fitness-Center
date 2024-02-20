import React from 'react'
import logo from "./Common/logo_fitness.svg";

function Cronometro() {

    function closeCrono(){
        document.getElementById('cronometro').classList.remove("d-block")
      }

  return (

              <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="cronometro">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} width="25"></img>
                    <h2 className="modal-title text-white text-center">CRONOMETRO</h2>

                  </div>
                  <div className="modal-body py-3 text-white">

                  <h4 className="text-white mt-3 fw-bold">Allenamento inserito correttamente!</h4>
                    </div>

                  <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                    <div className="modal-footer">
                      <button type="button" onClick={()=>closeCrono()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                      <i className='fa fa-times px-2 fs-4'></i>Chiudi
                        </button>
                    </div>
                  </div>
              </div>
            </div>
            </div>

  )
}

export default Cronometro