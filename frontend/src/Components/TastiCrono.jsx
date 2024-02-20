import React from 'react'

function TastiCrono() {

    function closeCrono(){
        document.getElementById('cronometro').classList.remove("d-block")
      }

  return (
    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
        <button type="button" onClick={()=>closeCrono()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
        <i className='fa fa-times px-2 fs-4'></i>Chiudi
        </button>
    </div>
  )
}

export default TastiCrono