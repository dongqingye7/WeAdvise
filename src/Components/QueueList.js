
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import { Button, Card, Row, Col } from "react-bootstrap";
import firebase from "firebase/app";
import Headerh from "./Layouts/Header";
import React, { Component } from "react";
import * as routes from "../constants/routes";
import { KeyboardAwareScrollView } from "react";
import { Appbar } from "react";
// import Search from "./src/components/Search";//!< Imports search component in this screen
import { StyleSheet, Text, View, TextInput } from "react"; //!< Import various designing tools from react-native mainly for Styling


class QueueList extends Component {
   state = {
    Queue:null ,
    
  };
  ondelete = event => {
    const { history } = this.props;

    history.push(routes.HOME);
    
  };
  componentDidMount() {

   db.doGetQueue().then(snapshot =>
      this.setState(() => ({ Queue: snapshot.val() }))
    );
  }
  
  render() {

    const { Queue } = this.state;
    return (
      <div className='container'>
  <section className='display-item'>
    <div className="wrapper">
        
    { !!Queue && <UserList Queue={Queue} /> || <Button>hhh</Button> }

    </div>
  </section>
</div>
    );
    }
}


const UserList = ({ Queue }) =>
  <div>
    <h2>List of Students on Advising Queue</h2>

    {Object.keys(Queue).map(key =>
      <div key={key}>{Queue[key].name}  {Queue[key].Advisor} {Queue[key].message} {Queue[key].Student_id}
      <Button variant="outline-danger"
      
      >
        Delete
        </Button>
      </div>
    )}
  </div>

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(QueueList); //grants authorization to open endpoint if an user is signed in
