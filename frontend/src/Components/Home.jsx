import React from "react";
import { UseAuthContext } from "../hooks/UseAuthContext"
import HomeUser from "./HomeUser";
import HomeTrainer from "./HomeTrainer";

function Home(){

    const {user} = UseAuthContext()

    console.log(user.role)

    return(
        <div className="container-fluid bg-fitness pt-5">
          <h1 className="text-body-emphasis mx-2">Benvenuto a bordo!</h1>
            <div className="d-flex align-items-center">
              <a href="#">
               <i className="fa fa-user-circle text-danger mb-3" style={{fontSize:20}}></i>
              </a>
            <h1 className="text-body-emphasis mx-2">{user.email}</h1>
            </div>

          {user.role == "user" ? <HomeUser/> : <HomeTrainer/>}


        </div>
    )

}

export default Home