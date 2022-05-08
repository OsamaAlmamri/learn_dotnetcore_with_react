import React from 'react';
import logo from './logo.svg';
import './App.css';
import { docks } from './demo';
import DoclItem from './DockItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. 
        </p>
        {docks.map( dock=>(

          <DoclItem dock={dock}></DoclItem>
        )

      

        )}
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
