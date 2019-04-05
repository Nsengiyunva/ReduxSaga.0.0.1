import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { fetching, dog, error, onRequestDog } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ dog || logo} className="App-logo" alt="logo" />
          <h6> Welcome to the dog saga </h6>
        </header>
        {dog ? <p className="App-intro"> Keep clicking for new dogs </p> : <p>Replace the react icon with a dog!</p>}
        {fetching ? (<button disabled>Fetching...</button>) : (<button onClick={onRequestDog}></button>)}
        {error && <p>Something went horribly wrong. try again later</p>}
      </div>
    );
  }
}

const mapStateToProps =  state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch( { type: "API_CALL_REQUEST" } )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
