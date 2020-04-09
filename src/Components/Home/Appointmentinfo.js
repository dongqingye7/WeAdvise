import React, { Component } from "react";
import * as routes from "../../constants/routes";

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import { Button, Card, Row, Col } from "react-bootstrap";
import firebase from "firebase/app";
import Headerh from "../Layouts/Header";

class AppointmentInfo extends Component {
  state = {
    name: "",
    message: "",
    Student_id: "",
    Advisor: ""
  };
  ondelete = event => {
    const { history } = this.props;

    var Q = firebase.database().ref("Queue");
    var user = firebase.auth().currentUser;
    var uidd = user.uid;

    Q.child(uidd).remove();
    window.alert("You appointment has been cancelled.");
    history.push(routes.HOME);
    
  };

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAppointment(loggedUser.uid).then(res => {
      if (res.val() != null) {
        this.setState({
          name: res.val().name,
          message: res.val().message,
          Student_id: res.val().Student_id,
          Advisor: res.val().Advisor
        });
      }
      if (res.val() == null) {
        this.setState({
          name: "N/A",
          message: "N/A",
          Student_id: "N/A",
          Advisor: "N/A"
        });
      }
    });
  }

  render() {
    const { name, message, Student_id, Advisor } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <>
        <Headerh />

        <div className="container pt-7 w-50 mt-4">
          <Card border="info" className="shadow">
            <h2 className="text-center py-3 "><i class="far fa-calendar-check"></i>  My Appointment</h2>
            <div className="px-6 pb-4 text-dark">
              <p className="centered"> Name: {name}</p>
              <hr className="mt--1"></hr>
              <p className="centered"> Time: {message}</p>
              <hr className="mt--1"></hr>
              <p className="centered"> Student ID: {Student_id}</p>
              <hr className="mt--1"></hr>
              <p className="centered"> Advisor: {Advisor}</p>
              <hr className="mt--1"></hr>
              <Row className="text-center py-2">
                <Col>
                  <Button onClick={this.ondelete} variant="outline-danger">
                    Cancel Appointment
                  </Button>
                </Col>
                <Col>
                  <Button href="/Home" variant="outline-info">
                    Back to Homepage
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AppointmentInfo); //grants authorization to open endpoint if an user is signed in
