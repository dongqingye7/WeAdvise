import React, { Component } from "react";

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";

class AppointmentInfo extends Component {
  state = {
    name:"",
    message:"",
    Student_id:"",
    Advisor:"",
    
  };

  componentDidMount() {
   

    const { loggedUser } = this.props;
    db.doGetAppointment(loggedUser.uid).then(res => {
      this.setState({
        name: res.val().name,
        message: res.val().message,
        Student_id: res.val().Student_id,
        Advisor: res.val().Advisor
        
      });
    });
  }

  render() {
    const {name, message, Student_id, Advisor } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
        <div className="card h-100">
        <h4 className="card-header">My Information</h4>

        {<p className="centered"> NAME:{name}</p>}
        {<p className="centered"> Message:{message}</p>}
        {<p className="centered"> Student Id:{Student_id}</p>}
        {<p className="centered"> Advisor:{Advisor}</p>}
                
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AppointmentInfo); //grants authorization to open endpoint if an user is signed in
