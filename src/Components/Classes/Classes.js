import React from 'react';
import DegreePlan from './DegreePlan';
import CourseChecklist from './CourseChecklist';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import withAuthorization from "../withAuthorization";
import Headerh from "../Layouts/Header"
import Row from 'react-bootstrap/Row'

function Classes() {
  return (

    <div className="Classes">
          <Headerh/>
      <Tabs defaultActiveKey="degreePlan" id="classTab">
        <Tab eventKey="degreePlan" title="Degree Plan">
          <div className="bg-white">
          <Row className="m-3">
            <DegreePlan />
          </Row>
          </div>
        </Tab>
        <Tab eventKey="courseTaken" title="Courses Checklist">
          <CourseChecklist />
        </Tab>
      </Tabs>
      
    </div>
  );
}

const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(Classes);