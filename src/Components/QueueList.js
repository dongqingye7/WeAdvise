
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
import Navbar from "./Advisor/Navbar";
import {Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Typography} from '@material-ui/core';


class QueueList extends Component {
   state = {
    Queue:null ,
    
  };
  ondelete = () => {
    const { history } = this.props;
    this.refs.remove();
    history.push(routes.HOME);
    
  };
  componentDidMount() {

   db.doGetQueue().then(snapshot =>
      this.setState(() => ({ Queue: snapshot.val() }))
    );
  }

  // Object.keys(Queue).map(key =>
  //   <div key={key}>{Queue[key].name}  {Queue[key].Advisor} {Queue[key].message} {Queue[key].Student_id}
  //   {/* <Button variant="outline-danger"
  //   onClick={this.ondelete}
  //   >
  //     Delete
  //     </Button> */}
  //   </div>
  // )
  
  render() {
    
    const { Queue } = this.state;
    return (
      <>
      <Navbar />
      <div className="container pt-7 pb-4">
      
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        
      <TableHead>
      {/* <Typography variant="h5" component="div" className="">Current Queue</Typography> */}
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Advisor</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Student ID</TableCell>
            <TableCell >Edit</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      { !!Queue && Object.keys(Queue).map(key =>
        <TableRow key={key.name}>
              <TableCell component="th" scope="row">{Queue[key].name}</TableCell>
              <TableCell >{Queue[key].Advisor}</TableCell>
              <TableCell >{Queue[key].message}</TableCell>
              <TableCell >{Queue[key].Student_id}</TableCell>
              <TableCell ><Button variant="outline-danger" onClick={this.ondelete}>Delete</Button></TableCell>

        </TableRow>
  //   <div key={key}>{Queue[key].name}  {Queue[key].Advisor} {Queue[key].message} {Queue[key].Student_id}
  // <Button variant="outline-danger" onClick={this.ondelete}>Delete</Button>
  //   </div>
  )}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
    </>
    );
    }
}


const UserList = ({ Queue }) =>
  <div>
    <h2>List of Students on Advising Queue</h2>

    
  </div>

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(QueueList); //grants authorization to open endpoint if an user is signed in
