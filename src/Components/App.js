import * as routes from "../constants/routes";
import withAuthentication from "./withAuthentication";
import React from 'react';
import {Header} from './Layouts';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Schedule from './Schedule/Schedule';
import Classes from './Classes/Classes';
import Help from './Help/Help';
import Queue from './Schedule/Queue';
import SignUpPage from "./SignUp/SignUp";
import SignInPage from "./SignIn/SignIn";
import PasswordForgetPage from "./PasswordForget";
import AccountPage from "./Account";
import AdvisorAbout from "./Advisor/AdvisorAbout";
import AdvisorHome from "./Advisor/AdvisorHome";
import AdvisorLogin from "./Advisor/AdvisorLogin";
import LandingPage from "./LandingPage/Landing";
import AppointmentInfo from "./Home/Appointmentinfo";
import QueueList from "./QueueList";




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/classes' component={Classes} />
          {/* <Route path='/signout' component={Signout} /> */}

          <Route path='/help' component={Help} />
        </Switch>
        <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.LANDING} component={LandingPage}/>
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.QUEUE} component={Queue} />
      <Route exact path={routes.QUEUE_LIST} component={QueueList} />
       <Route exact path={routes.A_LOGIN} component={AdvisorLogin} />
      <Route exact path={routes.A_HOME} component={AdvisorHome} />
      <Route exact path={routes.A_ABOUT} component={AdvisorAbout} />
      <Route exact path={routes.A_INFO} component={AppointmentInfo} />


      </div>
    </Router>

  );
}

export default withAuthentication(App); //using HoC to handle session
