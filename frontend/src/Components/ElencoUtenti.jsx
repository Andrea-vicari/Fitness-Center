import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link } from 'react-router-dom';


function ElencoUtenti (){

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
        <div className="container-fluid bg-fitness pt-3 pb-3 mt-4">
          <div className="bg-dark p-3 rounded w-100 text-white">
            <h1 className="text-white">Elenco utenti</h1>
            <hr className="col-3 col-md-2 mb-3 text-white"/>

            <div className="row g-5">
            <div className="col-md-6">
                  <p className="text-white-50">Clicca sul nome utente per accedere alla scheda o assegnarne una nuova</p>
                  <hr className="col-3 col-md-2 mb-3"/>
                  <ul className="list-group list-group">
                  {data.map((e)=>{
                    return(
                      <li key={e._id} className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{e.email}</div>

                      </div>
                      <Link  to={`/singoloutente/${e._id}`} state={e._id} className="btn btn-small bg-danger py-0 text-white">Click</Link>
                    </li>

                    )})}


                  </ul>



            </div>
            </div>
          </div>
        </div>
    )


}

export default ElencoUtenti