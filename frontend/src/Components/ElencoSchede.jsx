import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link } from 'react-router-dom';


function ElencoSchede(){

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

    return(
        <div className="container-fluid bg-fitness pt-5">
            <div className="col-md-6 pb-4">
            <div className="bg-dark p-3 rounded w-100 text-white">
                  <h3 className="text-white">Scheda Allenamento</h3>
                 <div className="list-unstyled">
                  {data.map((e)=>{
                      return(
                      <Link key={e._id} to={`/allenamento/${e._id}`} state={e._id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <i className="fa fa-arrow-circle-right fs-4 text-danger"></i>
                       <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h5 className="mb-0">{e.title}</h5>

                          </div>

                        </div>
                      </Link>
                       )})}
                  </div>

                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-white">Schede Completate</h3>
                <p>Elenco delle schede completate</p>
                <ul className="list-unstyled">
                <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                <i className="fa fa-calendar fs-4 text-danger"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h5 className="mb-0">Schede</h5>
                          </div>
                      </div>
                </li>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>

            </div>

            </div>

        </div>
    )

}

export default ElencoSchede