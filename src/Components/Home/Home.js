import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarComponent from './CalendarComponent';
import UserInfo from './UserInfo';
import Card from 'react-bootstrap/Card';



function Home() {

  return (
    <div className="Home">]
    <Container>
      <Row>
        <Col>
          <UserInfo />
        </Col>
 
        <Col xs={6}>
          <CalendarComponent />
        </Col>
        <Col>
          <Card>
            <h4 className="card-header"> Advisor Info</h4>
          </Card>
        </Col>
      </Row>
    </Container>



    </div>
  );
}


// import React from 'react';
// import PropTypes from 'prop-types';

// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
// import withAuthorization from '../Session/withAuthorization';

// const AccountPage = (props, { authUser }) =>
//   <div>
//     <h1>Account: {authUser.email}</h1>
//     <PasswordForgetForm />
//     <PasswordChangeForm />
//   </div>

// AccountPage.contextTypes = {
//   authUser: PropTypes.object,
// };

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(AccountPage);

export default Home;
