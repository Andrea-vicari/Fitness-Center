import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link } from 'react-router-dom';


function DashUser(){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()

    console.log(user.user_id)

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
          <h1 className="text-body-emphasis mx-2">Benvenuto a bordo!</h1>
            <div className="d-flex align-items-center">
              <a href="#">
               <i className="fa fa-user-circle text-danger mb-3" style={{fontSize:70}}></i>
              </a>
            <h1 className="text-body-emphasis mx-2">{user.email}</h1>
            </div>

            <div className="col-md-6 pb-4">
            <div className="bg-dark p-3 rounded w-100 text-white">
                  <h3 className="text-white">Scheda Allenamento</h3>
                  <p className="text-white">Clicca per accedere ad ogni allenamento</p>

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
                <h3 className="text-body-emphasis">Prenota Lezione</h3>
                <ul className="list-unstyled ps-0">
                <li>
                    <a className="icon-link mb-1 text-decoration-none text-white" href="" target="_blank">
                    <i className="fa fa-calendar fs-4 text-danger"></i>
                    Clicca e prenota
                    </a>
                </li>

                </ul>
            </div>

            </div>

        </div>
    )

}

export default DashUser