import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link } from 'react-router-dom';
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";

function ElencoUtenti (){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()


    const makeAPICall = async () => {
        try {
          const response = await fetch('https://fitness-center-nu.vercel.app/api/users', {mode:'cors'});
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

      var filteredList = [];
      let terVar = false

      data.forEach(element => {
        console.log(element)
        element.email !== user.email  ? filteredList.push(element) : terVar = true
        return filteredList
      });



    return(

        <div className="container-fluid bg-fitness pt-3 pb-3 mt-4">
         {user.role == "admin" ? <NavTrainer/> : <Navbar/>}

          <div className="container bg-dark p-3 rounded w-100 text-white mx-auto">
            <h1 className="text-white">Elenco utenti</h1>
            <hr className="col-3 col-md-2 mb-3 text-white"/>

            <div className="row g-5">
            <div className="col-md-6">
                  <p className="text-white-50">Clicca sul nome utente per accedere alla scheda o assegnarne una nuova</p>
                  <hr className="col-3 col-md-2 mb-3"/>
                  <ul className="list-group list-group">
                  {filteredList.map((e)=>{
                    return(
                      <li key={e._id} className="mb-3 list-group-item d-flex justify-content-evenly align-items-start">
                      <div className="ms-2 me-auto">

                        <Link to={`/singoloutente/${e._id}`} state={e._id} className="fs-5 text-danger">{e.email}</Link>

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