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

      console.log(data)

      let singleTraining = [];
      let terVar = false

      data.forEach(element => {
        element._id == title ? singleTraining.push(element) : terVar = true
      });






    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <div className="d-flex justify-content-center align-items-center pb-5">
            {singleTraining.map((e)=>{
            return(
                <div className="card bg-dark pb-3 w-100" key={e.title}>

                    <h1 className="card-header text-white">{e.title}</h1>
                       <small className='text-white mt-3'>Creato il giorno:<small className='card-header text-white'>{e.today}</small></small>



                    <div className="card-body">
                        <p className="card-text text-white-50 fs-2">Serie: {e.series}</p>
                        <p className="card-text text-white-50 fs-2">Ripetizioni: {e.reps}</p>
                        <p className="card-text text-white-50 fs-2">Riposo: {e.rest} sec</p>
                        <p className="card-text text-white-50 fs-2">Carico: {e.loads} KG</p>

                    </div>
                    <div className="card-footer">
                    <button className="btn btn-sm btn-success">Conferma Esecuzione</button>
                    <Link to="/elencoschede" className="btn btn-sm btn-danger mx-3">Torna alla scheda</Link>

                    </div>
                </div>
            )})}


            </div>
        </div>
    )

}

export default SchedaTraining