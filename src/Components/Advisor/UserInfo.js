import React, { Component } from "react";

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";

class UserInfo extends Component {
  state = {
    Firstname:"",
    Lastname:"",
    Major:"",
    Year_Started:"",
    role:"",
    year: "",
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
      });
    });
  }

  render() {
    const {Firstname, Lastname, Major, Year_Started,role, year } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
        <div className="card h-100">
        <h4 className="card-header">My Information</h4>

        {<p className="centered"> FIRST NAME:{Firstname}</p>}
        {<p className="centered"> LAST NAME:{Lastname}</p>}
        {<p className="centered"> MAJOR:{Major}</p>}
        {<p className="centered"> YEAR STARTED:{Year_Started}</p>}
        { <p className="centered">Role: {role}</p>}
        {<p className="centered"> GRADUATING {year}</p>}

        
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserInfo); //grants authorization to open endpoint if an user is signed in
