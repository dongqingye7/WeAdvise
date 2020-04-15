/*!
=========================================================
* Argon Dashboard React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";

import firebase from 'firebase/app';

// reactstrap components
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import { keys } from "@material-ui/core/styles/createBreakpoints";
//import numInQueue from 




 const queueUser=5;


            // let dobobj = Object.values(dataSnapShot.val());
            // for (var i = 0; i < dataSnapShot.numChildren(); i++) {
            //   if (dobobj[i].uid == uid) {
                
            //   }
            // }



class Header extends React.Component {

  
  state = {
    Firstname:"",
    Lastname:"",
    Major:"",
    Year_Started:"",
    name:"",
    message:"",
    Student_id:"",
    Advisor:"",
    NUMB:"",
    POS:""
    
  };

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var self = this;
    var doblist = firebase.database().ref("Queue");
        doblist.once("value", dataSnapShot => {
          let dobobj = Object.values(dataSnapShot.val());
          let dobkey = Object.keys(dataSnapShot.val());
          for (var i = dataSnapShot.numChildren() ; i >0 ; i--) {
            if(dobkey[i] == loggedUser.uid){
            self.setState({
              POS: i+1
            })
            console.log("myyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"+ this.POS)
          }
          }
            this.setState({
              NUMB: dataSnapShot.numChildren() ,
            })
        });
     
    const { loggedUser } = this.props;

   
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        Firstname: res.val().Firstname,
        Lastname: res.val().Lastname,
        Major: res.val().Major,
        Year_Started: res.val().Year_Started,
        
      });
    });








  }
  render() {
    const appLocation="ERB 642";
    

    
    const {Firstname, Lastname, Major, Year_Started, name, message, Student_id, Advisor, NUMB,POS } = this.state;
   
    
    // console.log("dasdf", this.props.loggedUser);
    return (
      <>
      <div className="header pb-8 pt-md-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-2"
                        >
                          My Information
                        </CardTitle>
                        
                          <div className="h5 font-weight-bold mb-0">
                            <p>Name: {Firstname} {Lastname}
                            <br />Office: {Major}
                            
                            </p>
                          </div>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fas fa-address-card" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-2"
                        >
                          My Schedule
                        </CardTitle>
                        
                        <div className="h5 font-weight-bold mb-0">
                            
                          <li>04/11 9:00am-10:00am</li>
                          <li>04/12 11:00am-12:00pm</li>
                          <li>04/13 01:00pm-03:00pm</li>
                            
                        </div>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-calendar-check" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                          tag="h3"
                          className="text-uppercase mb-2"
                        >
                          Current student
                      </CardTitle>
                      <div className="h5 font-weight-bold mb-0">
                            <p>Name: {name}
                            <br />ID: {Student_id}
                            <br />Major: {message}
                            </p>
                          </div>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-indigo text-white rounded-circle shadow">
                          <i className="fas fa-user-graduate" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  
                </Card>
                
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                          tag="h3"
                          className="text-uppercase mb-2"
                        >
                          Current Queue
                      </CardTitle>
                      <div className="h5 font-weight-bold mb-0">
                            <p>There are {NUMB} people waiting.</p>
                      </div>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  
                </Card>
                
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
    );
  }
}
const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(Header);
