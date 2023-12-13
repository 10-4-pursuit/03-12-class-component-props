import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClassGreeting from './ClassGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassGreeting name="Mike" />
      </header>
    </div>
  );
}

export default App;
