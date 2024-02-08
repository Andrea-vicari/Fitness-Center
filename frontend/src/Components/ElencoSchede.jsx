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
                <ul className="list-unstyled ps-0">
                  {data.map((e)=>{
                      return(
                  <Link className="icon-link mb-1 text-decoration-none text-white" key={e._id} to={`/allenamento/${e._id}`} state={e._id}>

                      <i className="fa fa-arrow-right fs-4 text-danger"></i>
                      <span className="text-white fs-4">{e.title}</span>

                  </Link>
                  )})}
                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-white">Schede Completate</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-calendar fs-4 text-danger"></i>
                    Clicca e prenota
                    </a>
                </li>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>

            </div>

            </div>

        </div>
    )

}

export default ElencoSchede