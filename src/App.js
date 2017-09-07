import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Nav, NavItem, Navbar, Grid, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row App-home">
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                    <span><a href="/">Ocean App</a></span>
                </Navbar.Brand>
                <Nav>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                </Nav>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
        </div>
        <div className="row">
              <div className="col-md-12">
                <div>
                    <h2>Home</h2>
                </div>
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
        <div className="row">
              <div className="col-md-12">
                <div>
                    <h2>About</h2>
                </div>
                <Jumbotron>
                  <Grid>
                    <h1>Welcome to Ocean App3</h1>
                    <p>
                      <Button
                        bsStyle="success"
                        bsSize="large"
                        href="http://react-bootstrap.github.io/components.html"
                        target="_blank">
                        View React Bootstrap Docs 2
                      </Button>
                    </p>
                  </Grid>
                </Jumbotron>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                <div>
                    <h2>Contact</h2>
                </div>
                <Jumbotron>
                  <Grid>
                    <h1>Welcome to Ocean App 3</h1>
                    <p>
                      <Button
                        bsStyle="success"
                        bsSize="large"
                        href="http://react-bootstrap.github.io/components.html"
                        target="_blank">
                        View React Bootstrap Docs 3
                      </Button>
                    </p>
                  </Grid>
                </Jumbotron>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
