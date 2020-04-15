import React, { Component } from "react";
import {Form, Col, InputGroup, Button} from 'react-bootstrap'
import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import firebase from 'firebase/app';
import * as routes from "../../constants/routes";



const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});


const INITIAL_STATE = {
  Firstname: "",
  Lastname:"",
  Major:"",
  Year_Started:"",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false,
  role: "Student",
  isAdvisor: false
};
class ProfileForm extends Component {
 
  state = {
    ...INITIAL_STATE
  };

  
  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        Firstname: res.val().Firstname,
        Lastname: res.val().Lastname,
        Major: res.val().Major,
        Year_Started: res.val().Year_Started,
        role: res.val().role,
        year: res.val().year,
        email: res.val().email,
      });
    });
  }

  onSubmit = event => {
    const { Firstname, Lastname,Major,Year_Started, email, passwordOne } = this.state;
    const { history } = this.props;
    db.UpdateUser(firebase.auth().currentUser.uid, Firstname, Lastname, Major, Year_Started, email, "Student")
    .then(() => {
      this.setState({
        ...INITIAL_STATE,
        
      });
      history.push(routes.A_ABOUT); //redirects to Home Page

    })

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
    const { Firstname, Lastname, Major, Year_Started, email } = this.state;
 
    
    return (
      <Form onSubmit={this.onSubmit} href="/advisor-about">
      <Form.Row className="pt-4 pl-5">
        <Form.Group as={Col} md="4" controlId="firstname" className="mr-6">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={this.state.Firstname}
            value = {Firstname}
            onChange={e =>
              this.setState(byPropKey("Firstname", e.target.value))
            }
          />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={this.state.Lastname}
            defaultValue={this.state.Lastname}
            value = {Lastname}
            onChange={e =>
            this.setState(byPropKey("Lastname", e.target.value))        
    }
          />
        </Form.Group>
      </Form.Row>
      <Form.Row className="pl-5">
        <Form.Group as={Col} md="4" controlId="Office" className="mr-6"> 
          <Form.Label>Office</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={this.state.Major}
              defaultValue={this.state.Major}
              value = {Major}
              required
              onChange={e =>
                this.setState(byPropKey("Major", e.target.value))
              }
            />
          </InputGroup>
        </Form.Group>
        
      </Form.Row> 
      <Form.Row className="pl-5 pb-4">
        <Button variant="primary" type="submit"    > 
          Save
        </Button>          
      </Form.Row> 
   
      </Form>
      );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ProfileForm);