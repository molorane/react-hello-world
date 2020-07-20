import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from "./components/Welcome"
import Hello from './components/Hello'
import Message from './components/Message';

class App extends Component{

   render(){

    return (
      <div className="App">
        <Greet name="Nomfundo" heroName="Jesus">
          <p>I love Nomfundo</p>
        </Greet>
        <Greet name="Millicent" heroName="Jesus">
          <button>Marry her</button>
        </Greet>
        <Welcome name="Mahlalela" heroName="Wife" />
        <Hello />
        <Message />
      </div>
    );
   }
}

export default App;
