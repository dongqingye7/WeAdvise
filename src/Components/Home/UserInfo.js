import React, { Component } from "react";

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";

class UserInfo extends Component {
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
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserInfo); //grants authorization to open endpoint if an user is signed in
