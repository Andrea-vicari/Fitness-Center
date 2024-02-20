import React from 'react'

function TastiCrono(props) {

  const StartButton = (
    <div className="btn btn-one btn-start"
        onClick={props.handleStart}>
        Start
    </div>
  );
  const ActiveButtons = (
      <div className="btn-grp">
          <div className="btn btn-two"
              onClick={props.handleReset}>
              Reset
          </div>
          <div className="btn btn-one"
              onClick={props.handlePauseResume}>
              {props.isPaused ? "Resume" : "Pause"}
          </div>
      </div>
  );



  return (
    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  )
}

export default TastiCrono