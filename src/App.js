import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleBtn from './GoogleBtn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <GoogleBtn/>

      </header>
    </div>
  );
}

export default App;