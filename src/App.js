import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google';
import logo from './logo.svg';
import './App.css';

import ReCaptchaComponent from './ReCaptchaComponent';

class App extends Component {
  
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="captcha_component">
          <ReCaptchaComponent/>
        </div>
      </div>
    );
  }
}

export default App;
