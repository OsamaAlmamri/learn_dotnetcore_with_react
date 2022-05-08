import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { docks } from './demo';
import DoclItem from './DockItem';
import axios from "axios"

function App() {

  const [activites,SetActivites] =useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/Activites").then(response=>{
      console.log(response.data)
      SetActivites(response.data)

    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. 
        </p>
        {/* {docks.map( dock=>(

          <DoclItem dock={dock}></DoclItem>
        )

      

        )} */}

        {activites.map(activity=>{
          return (
            <div>
              <span> {activity.title}</span>
            </div>
          )
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
