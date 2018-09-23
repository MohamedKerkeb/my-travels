import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./travels.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels 
          destination="Japon"
          country="On apprend peu par la victoire, mais beaucoup par la defaite."
          photo="https://images.unsplash.com/photo-1446694518429-60077dd2e230?ixlib=rb-0.3.5&s=9cd0a01a7a349a102f89a27aa39d9d90&auto=format&fit=crop&w=500&q=60"
          distance="Distance : Paris - Tokyo : 9706km"
        />
        <Travels 
          destination="Jordanie"
          country="C'est par amour que j'ai étudié, veillé des nuits entières et que je me suis épuisé."
          photo="https://images.unsplash.com/photo-1530624852-9beb898b2820?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22202be1ef73321e978e3e4de113ca3b&auto=format&fit=crop&w=500&q=60"
          distance="Distance : Paris - Amman : 4682km"
        />
      </div>
    );
  }
}

export default App;
