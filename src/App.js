import logo from './logo.svg';
import Button from '~/components/Button';
import './App.css';
// import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Button />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_black'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
