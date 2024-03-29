import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { Link } from 'react-router-dom';
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";

function ElencoSchedeChiuse(){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()


    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://fitness-center-nu.vercel.app/api/workouts/${user.user_id}`, {mode:'cors'});
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


      let closedTraining = [];
      let fakeVar = false

      data.forEach(element => {
        element.status == "CHIUSO" ? closedTraining.push(element) : fakeVar = true
      });


    console.log(closedTraining)


    return(
        <div className="container-fluid bg-fitness pt-5 mx-auto">
             {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
            <div className="col-md-6 pb-4 mx-auto">
            <div className="bg-dark p-3 rounded w-100 text-white">
                  <h3 className="text-white">Schede Completate</h3>
                  <hr className="col-3 col-md-2 mb-3"/>

                  <div className="row mb-3 text-center">
                  {closedTraining.map((e)=>{
                      return(

                    <div className="col-12" key={e._id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h6 className="card-title">{e.title}</h6>

                                <p className="card-text mb-0">SERIE: {e.series}</p>
                                <p className="card-text mb-0">REPS: {e.reps}</p>
                                <p className="card-text mb-0">CARICO: {e.loads}</p>
                                <p className="card-text mb-0">RIPOSO: {e.rest}</p>
                            </div>
                            <div className="card-footer">
                            <small className="card-text mb-0">CHIUSA IL: {e.dataChiusura}</small>
                            </div>
                        </div>
                    </div>


                     )})}
                  </div>
                  <Link to="/elencoschedeaperte" className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Indietro
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>
            </div>

            </div>

        </div>
    )

}

export default ElencoSchedeChiuse