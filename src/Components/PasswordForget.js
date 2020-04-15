import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Form, FormGroup, Label, Input, Alert } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, CssBaseline, makeStyles } from "@material-ui/core";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import { NavbarBrand, Navbar, Container } from "reactstrap";
import {Button} from 'react-bootstrap'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/dongqingye7/WeAdvise">
        We Advise
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal" expand="md">
        <Container className="px-4">
          <NavbarBrand href="/" className="pt-3 text-blue text-lg">
            We Advise
          </NavbarBrand>
        </Container>
      </Navbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <div className={classes.form}>
            <PasswordForgetForm />
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//################### PasswordForget Form ###################
const INITIAL_STATE = {
  email: "",
  error: null,
  showingAlert: false
};

class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
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
    const { email, error, showingAlert } = this.state;

    const isInvalid = email === "";

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

          <div className="row text-center">

            <div className="col">
            <Button
              disabled={isInvalid}
              type="submit"
              variant="primary"
            >
              Reset
            </Button>             
            </div>
            <div className="col">
            <Button href="/signin">
              Back
            </Button>            
            </div>



          </div>
        </Form>
      </div>
    );
  }
}

//################### PasswordForget Link ###################
const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };

// <form onSubmit={this.onSubmit}>
//   <input
//     value={this.state.email}
//     onChange={event =>
//       this.setState(byPropKey("email", event.target.value))
//     }
//     type="text"
//     placeholder="Email Address"
//   />
//   <button disabled={isInvalid} type="submit">
//     Reset My Password
//   </button>

//   {error && <p>{error.message}</p>}
// </form>
