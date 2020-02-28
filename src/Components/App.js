<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";

import * as routes from "../constants/routes";

//nav stuff
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home/Home";
import AccountPage from "./Account";
import AboutMePage from "./AboutMe/AboutMe";



import withAuthentication from "./withAuthentication";

const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation />

      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ABOUTME} component={AboutMePage} />

      <Route exact path={routes.ACCOUNT} component={AccountPage} />
    </Container>
  </BrowserRouter>
);


export default withAuthentication(App); //using HoC to handle session
=======
import React from 'react';
import {Header} from './Layouts';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Schedule from './Schedule/Schedule';
import Classes from './Classes/Classes';
import Help from './Help/Help';
import Signout from './Signout/Signout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/classes' component={Classes} />
          <Route path='/help' component={Help} />
          <Route path='/signout' component={Signout} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
>>>>>>> 55a6ffe1cd8951dace6249aac8b62e5b426069b8
