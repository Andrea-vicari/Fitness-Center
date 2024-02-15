import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";
import "../src/index.css";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Common/Footer';
import ElencoSchedeAperte from './Components/ElencoSchedeAperte';
import ElencoSchedeChiuse from './Components/ElencoSchedeChiuse';
import SchedeChiuseTrainer from './Components/SchedeChiuseTrainer';
import SingoloUtente from './Components/SingoloUtente';
import SchedaTraining from './Components/SchedaTraining';
import SchedaTrainingTrainer from './Components/SchedaTrainingTrainer';
import Home from './Components/Home';


import NewTraining from './Components/NewTraining';
import ElencoUtenti from './Components/ElencoUtenti';


function App() {

  const {user} = UseAuthContext()

  return (

    <React.Fragment>


          <Routes>

              <Route path="/" element={user ?<Home />: <Navigate to="/login"/>} />
              <Route path="/elencoschedeaperte" element={user ? <ElencoSchedeAperte />: <Navigate to="/login"/>} />
              <Route path="/elencoschedechiuse" element={user ? <ElencoSchedeChiuse />: <Navigate to="/login"/>} />
              <Route path="/schedechiusetrainer/:id" element={user ? <SchedeChiuseTrainer />: <Navigate to="/login"/>} />
              <Route path="/elencoutenti" element={user ? <ElencoUtenti />: <Navigate to="/login"/>} />
              <Route path="/singoloutente/:id" element={user ? <SingoloUtente />: <Navigate to="/login"/>} />
              <Route path="/allenamento/:id" element={user ?<SchedaTraining />: <Navigate to="/login"/>} />
              <Route path="/allenamento_trainer/:id" element={user ? <SchedaTrainingTrainer /> : <Navigate to="/elencoutenti"/>} />
              <Route path="/nuovotraining/:id" element={user ?<NewTraining />: <Navigate to="/login"/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
              <Route path="*" element={<Home />} />

          </Routes>

        <Footer />
   </React.Fragment>


  )
}

export default App