import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";


import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import ElencoSchede from './Components/ElencoSchede';
import DashTrainer from './Components/DashTrainer';
import SchedaTraining from './Components/SchedaTraining';
import Home from './Components/Home';

import "../src/index.css";
import NewTraining from './Components/NewTraining';


function App() {

  const {user} = UseAuthContext()
  console.log(user)



  return (

    <React.Fragment>
        <Navbar />

          <Routes>
              <Route path="/" element={user ?<Home />: <Navigate to="/login"/>} />
              <Route path="/dashtrainer" element={<DashTrainer />} />
              <Route path="/elencoschede" element={user ? <ElencoSchede />: <Navigate to="/login"/>} />
              <Route path="/allenamento/:id" element={<SchedaTraining />} />
              <Route path="/nuovotraining/:id" element={<NewTraining />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
          </Routes>

        <Footer />
   </React.Fragment>


  )
}

export default App