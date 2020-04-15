import React, { Component } from "react";
import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import Header from "../Layouts/Header";
import ProfileForm from './ProfileForm';
import {Row, Col, Container, Button} from 'react-bootstrap'
import PasswordChangeLink from "../PasswordChange";


class AboutMe extends Component {
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
        role: res.val().email,
        year: res.val().year,
        loading: false
      });
    });
  }

  render() {
    var user={
      firstname: "Josh",
      lastname: "Lee",
      major: "CSE",
      year: "2016",
      email: "josh.lee@uta.edu"
    }
    const { username,role, year, loading } = this.state;
    return (
      <div>
        <Header/>
        <div
          className="pt-5 pt-lg-5 d-flex"
          style={{
            minHeight: "800px",
            backgroundImage:
              "url(" + require("./background.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
           <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className=" align-items-center pt-8" fluid>
            <Row>
              <Col>
        <h1 className="display-2 text-white text-center pb-3">{"My Profile"}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
              </Col>
              <Col xs={6}>
                <div className="card w-100">
                  <ProfileForm user={user}/>
                </div>

              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>

        {/* {!loading && <p className="centered">Hello {username}!</p>}
        {!loading && <p className="centered">Hello {role}!</p>}
        {!loading && <p className="centered">Hello {year}!</p>}

        <p style={{ marginTop: "80px" }}>
          NOTE: This page is only accessible by signed in users.
        </p> */}
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

export default withAuthorization(authCondition)(AboutMe); //grants authorization to open endpoint if an user is signed in
