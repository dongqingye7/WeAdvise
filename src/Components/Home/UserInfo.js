<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

>>>>>>> 55a6ffe1cd8951dace6249aac8b62e5b426069b8

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";

class UserInfo extends Component {
<<<<<<< HEAD
  state = {
    users: null,
    username: "",
    role:"",
    year: "",
    loading: true
  };

  componentDidMount() {
   

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        role: res.val().role,
        year: res.val().year,
        loading: false
      });
    });
  }

  render() {
    const { users, username,role, year, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
        <div className="card h-100">
        <h4 className="card-header">My Information</h4>

        {<p className="centered"> NAME:{username}</p>}
        { <p className="centered">Role: {role}</p>}
        {<p className="centered"> GRADUATING {year}</p>}

        
      </div>
    );
  }
=======
    constructor(props) {
        super(props);
        this.state = {
            utaID: 0,
            firstName: "John",
            lastName: "Smith",
            major: "Computer Science",
            yearAttend: "2016",
        }
    }
    render() { 
        return (
            <Card border="primary">
                <Card.Header>My Information</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Name: {this.state.firstName+" "+this.state.lastName}</p>
                        <p>Major: {this.state.major}</p>
                        <p>Year: {this.state.yearAttend}</p>                        
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
>>>>>>> 55a6ffe1cd8951dace6249aac8b62e5b426069b8
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserInfo); //grants authorization to open endpoint if an user is signed in
