import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

import { withRouter } from "react-router-dom";

import { auth} from "../../firebase";
import * as routes from "../../constants/routes";

const AdvisorLogin = ({ history }) => {
  return (
    <div className="div-flex">
      <div>
        <h1 className="centered">Sign In</h1>
        {/* <img src={logo} className="App-logo" alt="My logo" /> */}

        <SignInForm history={history} />
      </div>
    </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showingAlert: false,
  role: "Advisor"
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password, role } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        if(this.state.role=="Student"){
          history.push(routes.A_HOME);
          }
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //defined below
      });

    event.preventDefault();
  };

  

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {
    const { email, password, error, role, showingAlert } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="user@gmail.com"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="pass-test"
              value={password}
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} type="submit">
              Sign In
            </Button>
          </div>
        </Form>

        <hr />

      </div>
    );
  }
}

export default withRouter(AdvisorLogin);

export { SignInForm };


