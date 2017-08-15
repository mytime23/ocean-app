import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span><a href="/">Ocean App</a></span>
        </div>
        <div>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Ocean App</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
      </div>
    );
  }
}

export default App;
