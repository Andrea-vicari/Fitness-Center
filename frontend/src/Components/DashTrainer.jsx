import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link, useParams } from 'react-router-dom';


function DashTrainer (){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()


    const makeAPICall = async () => {
        try {
          const response = await fetch('https://fitness-center-khaki.vercel.app/api/users', {mode:'cors'});
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



    return(
        <div className="container-fluid bg-fitness pt-5 mt-4">
            <h1 className="text-body-emphasis">Elenco utenti</h1>
            <hr className="col-3 col-md-2 mb-3 text-white"/>

            <div className="row g-5">
            <div className="col-md-6">
                  <p className="text-body-emphasis">Clicca sul nome utente per accedere alla scheda o assegnarne una nuova</p>
                  <hr className="col-3 col-md-2 mb-3"/>

                {data.map((e)=>{
                    return(
                        <div className="row mb-3 text-center" key={e._id}>
                        <div className="col-2"><i className="fa fa-user fs-2"></i></div>
                        <div className="col-6">{e.email}</div>
                        <div className="col-4">
                        <Link type="button" to={`/nuovotraining/${e._id}`} state={e._id} className="btn btn-danger">Danger</Link>
                        </div>
                    </div>

                    )})}

            </div>
            </div>
        </div>
    )


}

export default DashTrainer