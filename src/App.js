import React from 'react';
import logo from './icons/check-solid.svg';
import Navbar from './components/navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactddd
        </a>
      </header>

    </div>
  );
}

export default App;
