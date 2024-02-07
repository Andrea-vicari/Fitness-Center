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

      console.log(singleTraining)


    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <div className="d-flex justify-content-center align-items-center pb-5">
            {singleTraining.map((e)=>{
            return(
                <div className="card bg-dark pb-3 w-100" key={e.title}>
                    <h1 className="card-header text-white">{e.title}</h1>
                    <div className="card-body">
                        <p className="card-text text-white-50 fs-2">Serie: {e.series}</p>
                        <p className="card-text text-white-50 fs-2">Ripetizioni: {e.reps}</p>
                        <p className="card-text text-white-50 fs-2">Riposo: {e.rest} sec</p>
                        <p className="card-text text-white-50 fs-2">Carico: {e.loads} KG</p>

                        <a href="#" className="btn btn-success">Completa</a>
                        <p className='text-white mt-3'>Completato il giorno:</p>
                        <ul className="list-group mt-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge bg-dark rounded-pill">1</span>
                            </li>

                        </ul>


                    </div>
                    <div className="card-footer">
                    <Link to="/" className="btn btn-sm btn-danger mt-3">Torna all'elenco</Link>

                    </div>
                </div>
            )})}


            </div>
        </div>
    )

}

export default SchedaTraining