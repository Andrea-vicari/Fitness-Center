import React from "react";
import { UseAuthContext } from "../hooks/UseAuthContext"
import HomeUser from "./HomeUser";
import HomeTrainer from "./HomeTrainer";
import Navbar from "./Common/Navbar";
import NavTrainer from "./Common/NavTrainer";

function Home(){

    const {user} = UseAuthContext()

    console.log(user.role)

    return(
        <div className="container-fluid bg-fitness pt-5">
          {user.role == "admin" ? <NavTrainer/> : <Navbar/>}
          <div className="container mx-auto bg-dark p-3 w-100 text-white pb-0">
          <div className="container mx-auto p-3">
            <h1 className="text-white mx-2">Benvenuto a bordo!</h1>
            <div className="d-flex align-items-center">

               <i className="fa fa-user-circle text-danger mb-3" style={{fontSize:20}}></i>

            <h3 className="text-white mx-2">{user.email}</h3>
            </div>
          </div>
          </div>


          {user.role == "user" ? <HomeUser/> : <HomeTrainer/>}


        </div>
    )

}

export default Home