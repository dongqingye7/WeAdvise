import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Alert } from "reactstrap";
import * as routes from "../constants/routes";
import { auth, db } from "../firebase";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import uta from './uta.jpg';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WeAdvise
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignUpPage = ({ history }) => {
  const classes = useStyles();

  return(
  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={uta} alt="uta" />

        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
  
  <div>
    <div className="div-flex">
      <div>
        <SignUpForm history={history} />
      </div>
    </div>
    </div>
  </div>
  </Container>
  );
};

//################### Sign Up Form ###################
const INITIAL_STATE = {
  Firstname: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false,
  role: "Student",
  isAdvisor: false
};

//A Higher order function with prop name as key and the value to be assigned to
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {


  //defining state
  state = {
    ...INITIAL_STATE
  };

  

  onSubmit = event => {

    const { Firstname, email, passwordOne } = this.state;
    const { history } = this.props;
    const roles = {};
    
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      //it the above f unctions resolves, reset the state to its initial state values, otherwise, set the error object
      .then(authUser => {
        //creating a user in the database after the sign up through Firebase auth API
        db.doCreateUser(authUser.user.uid, Firstname, email, "Student")
          .then(() => {
            this.setState({
              ...INITIAL_STATE,
              roles
            });
            history.push(routes.SIGN_IN); //redirects to Home Page
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
            this.timer(); //show alert message for some seconds
          });
      })
      .catch(err => {
        this.setState(byPropKey("error", err));
        this.timer(); //show alert message for some seconds
      });

    event.preventDefault(); //prevents refreshing
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
    const {
      Firstname,
      email,
      passwordOne,
      passwordTwo,
      error,
      showingAlert      
    } = this.state;
    //a boolen to perform validation
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      Firstname === "";


    return (
            
      <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}
        <form onSubmit={this.onSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          
            <TextField
              autoComplete="fname"
              variant="outlined"
              required
              fullWidth
              name="firstname"
              id="First Name"
              Label="First Name"
              autoFocus
              value={Firstname}
              onChange={e =>
                this.setState(byPropKey("Firstname", e.target.value))
              }
            />
            </Grid>

        <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>  

          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Major"
                label="Major(CS,SE,CSE)"
                name="Major"
                autoComplete="Major"
              />
            </Grid>    

          <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="yearStarted"
                label="Year Started"
                name="yearStarted"
                autoComplete="yearStarted"
              />
            </Grid>  

            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="School Email Address"
              name="email"
              autoComplete="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={e => this.setState(byPropKey("email", e.target.value))}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField

               variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              value={passwordOne}
              onChange={e =>
                this.setState(byPropKey("passwordOne", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={e =>
                this.setState(byPropKey("passwordTwo", e.target.value))
              }
            />
          </Grid>

          <Typography component="h1" variant="h5">

            <Button disabled={isInvalid} type="submit"
            fullWidth
            variant="contained"
            color="primary">
              Sign Up
            </Button>
          </Typography>       
          </Grid>
        </form>

        <Box mt={5}>
        <Copyright />
      </Box>
      </div>
    );
  }
}

//################### Sign Up Link ###################
//used in the sign in when the user don't have an account registered yet
const SignUpLink = () => (
  <Grid container justify="flex-end">
  <Grid item>
  Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </Grid>
  </Grid>
);

//exports
export default withRouter(SignUpPage); //using a HoC to get access to history
export { SignUpForm, SignUpLink };