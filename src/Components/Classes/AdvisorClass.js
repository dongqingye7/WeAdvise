import React from 'react';
import DegreePlan from './DegreePlan';
import CourseChecklist from './CourseChecklist';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import withAuthorization from "../withAuthorization";
import Headerh from "../Advisor/Navbar";
import Row from 'react-bootstrap/Row';
import AddSwapForm from './AddSwapForm';
import { Container } from 'reactstrap';

function Classes() {


  return (
    <>
    <Headerh/>
    <div className="Classes pt-7">
          
      <Tabs defaultActiveKey="degreePlan" id="classTab">
        <Tab eventKey="degreePlan" title="Degree Plan">
          <div className="bg-white">
          <Row className="pt-3 pb-6">
            <DegreePlan />
          </Row>
          </div>
        </Tab>
        <Tab eventKey="courseTaken" title="Courses Checklist">
          <CourseChecklist />
        </Tab>
        <Tab eventKey="AddSWap" title="Add/Swap Form">
        <div className="bg-white">
          <Container>
          <Row className="pt-3 pb-6">
              <AddSwapForm />

          </Row>
          </Container>
          </div>
        </Tab>
      </Tabs>
      
    </div>
  </>
  );
}

const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(Classes);