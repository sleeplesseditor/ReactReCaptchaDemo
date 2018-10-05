import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recaptcha from 'react-recaptcha';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('ReCaptcha Successfully Loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You Have Successfully Subscribed!');
    } else {
      alert('Please Verify That You are a Human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    const keys = require('./config').captchaKey;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React ReCaptcha Demo</h1>
        </header>
        <div className="App-intro">
          <input type="text" placeholder="email@company.com" />

          <div
            className="convert"
            onClick={this.handleSubscribe}
          >Subscribe</div>

          <Recaptcha
            sitekey={keys}
            render="normal"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;
