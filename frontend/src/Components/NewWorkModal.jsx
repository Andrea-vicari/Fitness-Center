import React from 'react'
import { useState } from 'react';

import logo from "./Common/logo_fitness.svg";

function NewWorkModal() {

    function closeModal(){
        document.getElementById('modale_workout').classList.remove("d-block")
    }

  return (

    <div className="modal modal-sheet bg-dark px-4 py-md-5 d-block" tabIndex="-1" role="dialog" id="modale_workout">
      <div className="modal-dialog modal-xl bg-dark" role="document">
        <div className="modal-content rounded-4 shadow bg-dark" >
          <div className="modal-header d-block">
            <h2 className="modal-title text-white">TITOLO</h2>

          </div>
          <div className="modal-body py-3 text-white">
           <img src={logo} className='img-fluid'></img>
           <h4 className="text-white mt-3 fw-bold">CAZZO</h4>
            </div>
            <div className="modal-body py-3 text-white" id="modal_cont">
            <p className='fs-5'>
                CIAO
            </p>

            </div>

          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

            <div className="modal-footer">
              <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
              <i className='fa fa-times px-2 fs-4'></i>Close
                </button>
            </div>
          </div>
      </div>
    </div>
      </div>




  )
}

export default NewWorkModal