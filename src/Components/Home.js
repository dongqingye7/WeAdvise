import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    Firstname:"",
    Lastname:"",
    Major:"",
    Year_Started:"",
    role:"",
    year: "",
    loading: true
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        Firstname: res.val().Firstname,
        Lastname: res.val().Lastname,
        Major: res.val().Major,
        Year_Started: res.val().Year_Started,
        username: res.val().username,
        role: res.val().email,
        year: res.val().year,
        loading: false
      });
    });
  }

  render() {
    const { users, username,role, year, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <div>
        <h1>Home</h1>
        {!loading && <p className="centered">Hello {Firstname}!</p>}
        {!loading && <p className="centered">Hello {Lastname}!</p>}
        {!loading && <p className="centered">Hello {role}!</p>}
        {!loading && <p className="centered">Hello {username}!</p>}
        {!loading && <p className="centered">Hello {role}!</p>}
        {!loading && <p className="centered">Hello {year}!</p>}

        <p style={{ marginTop: "80px" }}>
          NOTE: This page is only accessible by signed in users.
        </p>
        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}

// const UserList = ({ users }) => (
//   <div>
//     {console.log("users", users)}
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
