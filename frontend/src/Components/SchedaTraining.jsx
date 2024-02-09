import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"


function SchedaTraining(){

    let clicked = useLocation();
    var title = clicked.state;

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()



    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://fitness-center-khaki.vercel.app/api/workouts/${user.user_id}`, {mode:'cors'});
          const data = await response.json();
          setData(data)

          console.log({ data})
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        if(user){
           makeAPICall();
        }

      }, [user])


      let singleTraining = [];
      let terVar = false

      data.forEach(element => {
        element._id == title ? singleTraining.push(element) : terVar = true
      });


      const [error, setError] = useState(null)
      const [status, setStatus] = useState()

      const handleSubmit = async (e) =>{

        e.preventDefault()

        setStatus("CHIUSO")

        const workout = {status}

        const response = await fetch("https://fitness-center-khaki.vercel.app/api/workouts/65c6743c02d0d9cb80d509aa", {

            method: 'PATCH',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
         }

        if(response.ok){
            setStatus("CHIUSO")
            setError(null)
            console.log('Modificato', json)
          } }

    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <div className="d-flex justify-content-center align-items-center pb-5">
            {singleTraining.map((e)=>{
            return(
              <div className="card border-none mb-3 rounded-3 w-100 border-0" key={e._id}>
                <div className="card-header py-3 text-bg-danger">
                  <h1 className="my-0 fs-1">{e.title}</h1>
                </div>
                <div className="card-body bg-dark">
                  <h6 className="text-white card-title pricing-card-title">Data Emissione<small className="text-white fw-light"> {e.today}</small></h6>
                  <ul className="list-unstyled mt-3 mb-2 text-white">
                  <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                     <h5 className="mb-3">Serie: {e.series}</h5>
                    </div>
                  </div>
                  </li>
                  <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                     <h5 className="mb-3">Ripetizioni: {e.reps}</h5>
                    </div>
                  </div>
                  </li>
                  <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                     <h5 className="mb-3">Riposo: {e.rest} sec</h5>
                    </div>
                  </div>
                  </li>
                  <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                     <h5 className="mb-3">Carico: {e.loads} KG</h5>
                    </div>
                  </div>
                  </li>

                  </ul>
                  <button onClick={(e)=>handleSubmit(e)} className="btn btn-success d-inline-flex align-items-center mb-3" type="button">
                 Registra esecuzione
                  <i className='fa fa-thumbs-up ms-1'></i>
                </button>
                <Link to="/elencoschede" className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Torna alla scheda
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>

                </div>
            </div>
            )})}


            </div>
        </div>
    )

}

export default SchedaTraining