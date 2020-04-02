import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import AuthLayout from '../Layouts/Auth';
class LandingPage extends React.Component {

 component=(
    <Container>
    <Row className="justify-content-center">
        <Col lg="5" md="6">
            <Button style={{margin: "50px"}}
                size="large"
                variant="contained" 
                component={Link}
                
                to="/advisor-login"
            >
                Advisor
            </Button>
            <Button
                style={{margin: "50px"}}
                size="large"
                variant="contained" 
                component={Link}
                
                to="/signin"
            >
                Student
            </Button>
            <Col md={3}></Col>
        </Col>
    </Row>
    </Container>
 )


  render() { 
    return (
      <div>  
      <AuthLayout content={this.component}/>  

    </div>
    );
  }
}


export default LandingPage;
