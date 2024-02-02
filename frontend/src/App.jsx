import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext"

import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import DashUser from './Components/DashUser';
import SchedaTraining from './Components/SchedaTraining';

import "../src/index.css";


function App() {

  const {user} = UseAuthContext()
  console.log(user)

  return (

    <React.Fragment>
        <Navbar />

          <Routes>
              <Route path="/dashboarduser" element={<DashUser />} />
              <Route path="/allenamento" element={<SchedaTraining />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/login' element={<Login />}></Route>
          </Routes>

        <Footer />
   </React.Fragment>


  )
}

export default App