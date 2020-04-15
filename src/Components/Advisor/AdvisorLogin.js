import React, { Component } from "react";
import { Form, FormGroup, Label, Alert } from "reactstrap";

import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp/SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { auth} from "../../firebase";
import * as routes from "../../constants/routes";
import {Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
/*import LockOutlinedIcon from '@material-ui/icons/LockOutlined';*/
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  NavbarBrand,
  Navbar,
} from "reactstrap";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/dongqingye7/WeAdvise">
        We Advise
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

     
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignInPage = ({ history }) => {
  const classes = useStyles();
  return (
    <div className="header">
    <Navbar
      className="navbar-top navbar-horizontal"
      expand="md"
    >
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
          Advisor Sign in
        </Typography>
        <form className={classes.form} noValidate>
        <SignInForm history={history} />

        </form>
        </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
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
    const { email, password } = this.state;

    const { history } = this.props;
    if (email === "chris.conly@uta.edu") {
      auth
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.A_HOME);
          
          
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
          this.timer(); //defined below
        });

      }
      else{
        window.alert("This login is only available for Advisor.")
      }

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
            <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
              placeholder="user@gmail.com"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
              Sign In
            </Button>
          </div>
        </Form>

        <hr />

      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };