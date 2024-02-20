import React from 'react'
import logo from "./Common/logo_fitness.svg";
import Timer from './Timer';
import TastiCrono from './TastiCrono';

function Cronometro() {

  function closeCrono(){
    document.getElementById('cronometro').classList.remove("d-block")
  }


  return (

              <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="cronometro">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} width="50"></img>
                    <h2 className="modal-title text-white">CRONOMETRO</h2>
                    <i className='fa fa-times px-2 fs-4 text-danger' onClick={()=>closeCrono()}></i>Chiudi

                  </div>
                  <Timer />
                  <TastiCrono />

              </div>
            </div>
            </div>

  )
}

export default Cronometro