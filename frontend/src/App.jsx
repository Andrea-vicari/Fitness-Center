import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext"

import Login from './Components/Login';
import Signup from './Components/Signup';
import "../src/index.css";

function App() {

  const {user} = UseAuthContext()
  console.log(user)

  return (




          <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path='/login' element={<Login />}></Route>
            </Routes>


  )
}

export default App