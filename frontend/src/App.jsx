import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import {Login} from './Components/Login';
import {Register} from './Components/Register';
import "../src/index.css";

function App() {


  return (
    <React.Fragment>



          <Routes>
              <Route path="/" element={<Register />} />
              <Route path='/login' element={<Login />}></Route>
            </Routes>

    </React.Fragment>
  )
}

export default App