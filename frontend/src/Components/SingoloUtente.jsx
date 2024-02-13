import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link, useLocation } from 'react-router-dom';
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";

var userID

const SingoloUtente = () =>{

  let clicked = useLocation();

  userID = clicked.state

  const [data, setData] = useState([]);
  const [work, setWork] = useState([]);
  const {user} = UseAuthContext()


  const makeUSERCall = async () => {
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
         makeUSERCall();
      }

    }, [user])

    const makeWORKOUTCall = async () => {
      try {
        const response = await fetch(`https://fitness-center-khaki.vercel.app/api/workouts/${userID}`, {mode:'cors'});
        const work = await response.json();
        setWork(work)

        console.log({ work })
      }
      catch (e) {
        console.log(e)
      }
    }
    useEffect(() => {
      if(work){
        makeWORKOUTCall();
      }

    }, [user])

    let singleUser = [];
    var userTraining = [];
    let terVar = false

      data.forEach(element => {
        element._id == userID ? singleUser.push(element) : terVar = true
      });

      work.forEach(element => {
        element.status == "OPEN" ? userTraining.push(element) : terVar = true
        return userTraining
      });

      console.log(userTraining)

    return (
    <div className="container py-5 bg-fitness">
          {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
      <div className="d-flex justify-content-center align-items-center">
      {singleUser.map((e)=>{
                    return(
        <div className="bg-dark px-3 pt-3 w-100 text-white" key={e._id}>
          <h2 className="text-white">Utente: {e.email}</h2>

            <p className="card-title text-white">Data Iscrizione: FIGA!!</p>
            <hr className="col-3 col-md-2 text-white"/>
        </div>

    )})}
      </div>
      <div className="bg-dark p-3 w-100 text-white">
      <h2 className="text-white">Scheda ATTIVA</h2>
      <p>Clicca su ogni singolo workout per accedere e completarlo</p>
      <div className="list-unstyled">
      {userTraining.map((e)=>{
            return(
              <Link key={e._id} to={`/allenamento_trainer/${e._id}`} state={e._id} className="list-group-item list-group-item-action d-flex gap-3 py-1" aria-current="true">
                  <i className="fa fa-arrow-circle-right fs-4 text-success"></i>
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h5 className="mb-0">{e.title}</h5>

                          </div>

                        </div>
                      </Link>

        )})}


      </div>

      </div>
      <div className="d-flex justify-content-center align-items-center">
      {singleUser.map((e)=>{
                    return(
        <div className="bg-dark p-3 w-100 text-white" key={e._id}>

            <h5 className="card-title text-white">Aggiungi Allenamento</h5>
            <Link type="button" to={`/nuovotraining/${e._id}`} state={e._id} className="btn btn-danger fs-6 mt-3">
             Aggiungi
            </Link>

        </div>

    )})}
      </div>


    </div>

  );

}

export default SingoloUtente