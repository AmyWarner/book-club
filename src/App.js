import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import { auth } from 'firebase';
import heroImage from './hero-banner.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
      <div className="hero">
      <div className="heroImage">
      <img className="heroImageOne" src= {heroImage}/>
      </div>
      <div className="loginText">
       <Auth>
         You are logged in
        </Auth>
      </div>
      <div  className="search">
      <input className="search">
      </input>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
