import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {db } from "../../firebase";
import withAuthorization from "../withAuthorization";
import * as routes from "../../constants/routes";

import firebase from 'firebase/app';
import Headerh from "../Layouts/Header"

import Col from 'react-bootstrap/Col';
import {Row } from "react-bootstrap";


const INITIAL_STATE = {
  name: "",
  Time: "",
  St_id:"",
  Advisor:"",

 
};

//A Higher order function with prop name as key and the value to be assigned to
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class Queue extends Component {
  //defining state
  state = {
    ...INITIAL_STATE
  };
  

  onSubmit = event => {
    const {  name, Time, St_id, Advisor} = this.state;
        //creating a user in the database after the sign up through Firebase auth API
        
        const { history } = this.props;

        db.makeQueue( firebase.auth().currentUser.uid, name, Time, St_id, Advisor)
          .then(() => {
            this.setState({
              ...INITIAL_STATE,
            });
           // history.push(routes.SIGN_IN); //redirects to Home Page
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
            this.timer(); //show alert message for some seconds
          });
          window.alert("You appointment has been scheduled."); 
     
            history.push(routes.HOME); //redirects to Home Page

    event.preventDefault(); //prevents refreshing
  };

 
  componentDidMount() {

  }
  render() {
    const {
      name,
      Time,
      St_id,
      Advisor
    } = this.state;
    //a boolen to perform validation
    

    return (
      <div>
        <Headerh/>
        <div className="p-7 container w-75">
        <div className="card border-info py-3 shadow">
        
          <div className="h2 text-lg-center text-bold pt-3">
          <i class="far fa-calendar-alt mr-3"></i>
            Appointment Request Form
          </div>
          <div className="container p-5">
          <Row>
            <Col>
            </Col>
            <Col>
                <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="userName">Full Name</Label>
                  <Input
                    className=""
                    type="name"
                    name="name"
                    id="Name"
                    placeholder="Name"
                    value={name}
                    onChange={e =>
                      this.setState(byPropKey("name", e.target.value))
                    }
                  />
              </FormGroup>

              


                <FormGroup>
                  
                  <Label className="mr-3" for="number">{"Time:"}</Label>
                  <select name="Time" id="Time" onChange={e => 
                      this.setState(byPropKey("Time", e.target.value))}>
                        <option value={Time}>
                          --Please choose an option--
                          </option>
                        <option value ="9 am" >9 am</option>
                          <option value ="10 am" >10 am</option>
                          <option value ="11 am" >11 am</option>
                          <option value ="12 pm" >12 pm</option>
                          <option value ="1 pm" >1 pm</option>
                          <option value ="2 pm" >2 pm</option>
                          <option value ="3 pm" >3 pm</option>
                          <option value ="4 pm" >4 pm</option>

                </select>
                </FormGroup>
                

                <FormGroup>
                  <Label for="number">Student ID</Label>
                  <Input
                    type="number"
                    name="ID"
                    id="St_id"
                    value={St_id}
                    onChange={e => 
                      this.setState(byPropKey("St_id", e.target.value))}
                  />
                </FormGroup>
                <FormGroup>
                  
                  <Label className="mr-3" for="number">{"Advisor: "}</Label>
                <select name="Advisor" id="Advisor" onChange={e => 
                      this.setState(byPropKey("Advisor", e.target.value))}>
                <option value={Advisor}>
                  --Please choose an option--
                  </option>
                <option value ="Linda Barasch" >Linda Barasch</option>
                          <option value ="Katy Pedone" >Katy Pedone</option>
                          <option value ="Chris Conly" >Chris Conly</option>
                          <option value ="Melissa Rose" >Melissa Rose</option>
                </select>

                </FormGroup>
                
                
                <div className="text-center">
                  <Button  type="submit">
                    Submit
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
      </div>
    );
  }
}



const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Queue); //using a HoC to get access to history
