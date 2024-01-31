import React from 'react';
import { Routes, Route } from 'react-router-dom';


import {Login} from './Components/Login';
import {Register} from './Components/Register';
import "../src/index.css";

function App() {


  return (




          <Routes>
              <Route path="/" element={<Register />} />
              <Route path='/login' element={<Login />}></Route>
            </Routes>


  )
}

export default App