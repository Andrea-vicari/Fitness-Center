import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link, useLocation } from 'react-router-dom';

var userID

const SingoloUtente = () =>{

  let clicked = useLocation();

  userID = clicked.state

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

    let singleUser = [];
      let terVar = false

      data.forEach(element => {
        element._id == userID ? singleUser.push(element) : terVar = true
      });

      console.log(singleUser)

    return (
    <div className="container py-5 bg-fitness">
      <div className="d-flex justify-content-center align-items-center py-5">
      {singleUser.map((e)=>{
                    return(
        <div className="bg-dark p-3 rounded w-100 text-white" key={e._id}>

          <h2 className="text-white">{e.email}</h2>

            <p className="card-title text-white">Data Iscrizione: 12/12/23</p>
            <hr className="col-3 col-md-2 mb-3 text-white"/>
            <h5 className="card-title text-white">Aggiungi Allenamento</h5>
            <Link type="button" to={`/nuovotraining/${e._id}`} state={e._id} className="btn btn-danger fs-6 mt-3">
             Aggiungi
            </Link>
            <hr className="col-3 col-md-2 mb-3 text-white"/>
            <h3 className="text-white">Scheda Allenamento</h3>
                  <p className="text-white">Clicca per accedere alla scheda</p>

                <ul className="list-unstyled ps-0">

                  <Link className="icon-link mb-1 text-decoration-none text-white" to="/elencoschede">

                      <i className="fa fa-arrow-right fs-4 text-danger"></i>
                      <span className="text-white fs-4">Vai alla scheda</span>

                  </Link>

                </ul>
        </div>

    )})}
      </div>

    </div>

  );

}

export default SingoloUtente