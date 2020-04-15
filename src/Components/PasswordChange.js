import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

import Header from "./Layouts/Header";
import { auth } from "../firebase";
import Col from 'react-bootstrap/Col';
import {Row } from "react-bootstrap";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //show alert message for some seconds
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
    const { passwordOne, passwordTwo, error, showingAlert } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div style={{ marginTop: "40px" }}>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}
        <Header/>
        <div className="p-7 container w-75">
        <div className="card p-5 shadow">
          <div className="h2 text-lg-center text-bold pt-3">
          <i class="fas fa-key mr-3"></i>
            Change My Password
          </div>  
      <Row className="pt-4">
        <Col>
        </Col>
        <Col>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="examplePassword1">New Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword1"
              placeholder="New Password"
              value={passwordOne}
              onChange={e =>
                this.setState(byPropKey("passwordOne", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword2">Confirm Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={e =>
                this.setState(byPropKey("passwordTwo", e.target.value))
              }
            />
          </FormGroup>

          <div className="text-center p-3">
            <Button disabled={isInvalid} type="submit" outline color="danger">
              Update
            </Button>

            <Button href="/aboutme" outline color="primary">
              Back
            </Button>
          </div>
        </Form>
        </Col>
        <Col>
        </Col>
        </Row>
        </div>
      </div>
      </div>
    );
  }
}

export default PasswordChangeForm;

// <form onSubmit={this.onSubmit}>
//   <input
//     value={passwordOne}
//     onChange={event =>
//       this.setState(byPropKey("passwordOne", event.target.value))
//     }
//     type="password"
//     placeholder="New Password"
//   />
//   <input
//     value={passwordTwo}
//     onChange={event =>
//       this.setState(byPropKey("passwordTwo", event.target.value))
//     }
//     type="password"
//     placeholder="Confirm New Password"
//   />
//   <button disabled={isInvalid} type="submit">
//     Change My Password
//   </button>

//   {error && <p>{error.message}</p>}
// </form>
