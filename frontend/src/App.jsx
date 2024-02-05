import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import DashUser from './Components/DashUser';
import DashTrainer from './Components/DashTrainer';
import SchedaTraining from './Components/SchedaTraining';
import NuovoTraining from './Components/NewTraining';

import "../src/index.css";
import NewTraining from './Components/NewTraining';


function App() {

  const {user} = UseAuthContext()
  console.log(user)



  return (

    <React.Fragment>
        <Navbar />

          <Routes>
              <Route path="/" element={user ?<DashUser />: <Navigate to="/login"/>} />
              <Route path="/dashboarduser" element={<DashUser />} />
              <Route path="/dashtrainer" element={<DashTrainer />} />
              <Route path="/allenamento" element={<SchedaTraining />} />
              <Route path="/nuovotraining" element={<NewTraining />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
          </Routes>

        <Footer />
   </React.Fragment>


  )
}

export default App