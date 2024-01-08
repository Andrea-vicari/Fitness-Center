import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';



const App = () => {
  const [data, setData] = useState([])

useEffect(()=> {
  axios.get('https://mern-stack-gp2j.vercel.app/')
  .then(res => setData(res.data))
  .then(console.log(data))
  .catch(err => console.log(err))
}, [])


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

}

export {App};
