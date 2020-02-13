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
