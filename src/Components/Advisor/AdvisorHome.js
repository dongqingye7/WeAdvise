import React from 'react';
import '../Home/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarComponent from '../Home/CalendarComponent';
import UserInfo from '../Home/UserInfo';
import withAuthorization from "../withAuthorization";
import AdvisorInfo from '../Home/AdvisorInfo';
import { auth} from "../../firebase";
import * as routes from "../../constants/routes";



function AdvisorHome() {

  return (
    <div className="Home">
      
    <Container>
      <Row>
        <Col>
          <UserInfo />
        </Col>
 
        <Col xs={6}>
          <CalendarComponent />
        </Col>
        <Col>
          <AdvisorInfo />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

// export default withAuthorization(authCondition)(AccountPage);
const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(AdvisorHome); //grants authorization to open endpoint if an user is signed in
