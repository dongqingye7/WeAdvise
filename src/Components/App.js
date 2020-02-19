import React from 'react';
import {Header} from './Layouts';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Schedule from './Schedule/Schedule';
import Classes from './Classes/Classes';
import Help from './Help/Help';
import Signout from './Signout/Signout';
import Signup from './SignUp/index';
import SignInPage from './SignIn/index';
import PASSWORD_FORGET from './PasswordForget/index';
import PasswordChangeForm from './PasswordChange/index'



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
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/pw-forget' component={PASSWORD_FORGET} />
          <Route path='/pw-change' component={PasswordChangeForm} />



        </Switch>

      </div>
    </Router>

  );
}

export default App;
