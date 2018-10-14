import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState((state, props) => {
      return {counter: state.counter + 1};
    });
  }

  render() {
    var title = this.props.title
    var counter = this.state.counter
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
            Learn React {title}
          </a>
          <button onClick={this.increaseCounter}>click whatever </button>
          <p> haz clikeado :{counter}  </p>
        </header>
      </div>
    );
  }
}

export default App;
