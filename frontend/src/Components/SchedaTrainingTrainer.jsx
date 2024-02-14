import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";

function SchedaTrainingTrainer(){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()


    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://fitness-center-khaki.vercel.app/api/workouts/`, {mode:'cors'});
          const data = await response.json();
          setData(data)

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

      console.log(data)

      let clicked = useLocation();
      var title = clicked.state;

      console.log(title)
      let singleTraining = [];
      let terVar = false

      data.forEach(element => {
        element._id == title  ? singleTraining.push(element) : terVar = true
        return singleTraining
      });

      console.log(singleTraining)

      var dataChiusura = new Date().toDateString()

      const [error, setError] = useState(null)
      const [status, setStatus] = useState("CHIUSO")
      const [datachiusura, setDatachiusura] = useState(dataChiusura)

      const handleSubmit = async (e) =>{

        e.preventDefault()

        setStatus("CHIUSO")
        setDatachiusura(dataChiusura)

        const workout = {status, dataChiusura}

        const response = await fetch(`https://fitness-center-khaki.vercel.app/api/workouts/${title}`, {

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
            setDatachiusura(dataChiusura)
            setError(null)
            console.log('Modificato', json)
          } }

    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
          {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
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
                  <hr className="col-3 col-md-2 mb-3 w-100 text-danger"/>
                  <h3 className='text-white'>Eseguita il:</h3>
                  {e.registered.map((e)=>{
                  return(
                    <ul className='list-group'>
                    <li className='list-group-item'>{e.registered}</li>
                    </ul>
                  )})}
                  <hr className="col-3 col-md-2 mb-3 w-100 text-danger"/>
                  <h3 className='text-white'>Clicca per completare la scheda</h3>
                  <button onClick={(e)=>handleSubmit(e)} className="btn btn-danger d-inline-flex align-items-center mb-3" type="button">
                 Chiudi scheda
                  <i className='fa fa-clock ms-1'></i>
                </button>
                <hr className="col-3 col-md-2 mb-3 w-100 text-danger"/>
                <Link to={`/elencoutenti/`} className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Torna all'elenco utenti
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>

                </div>
            </div>
            )})}


            </div>
        </div>
    )

}

export default SchedaTrainingTrainer