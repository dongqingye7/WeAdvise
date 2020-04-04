import React from 'react';
import DegreePlan from './DegreePlan';
import CourseChecklist from './CourseChecklist';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import withAuthorization from "../withAuthorization";
import Headerh from "../Layouts/Header"


function Classes() {
  return (

    <div className="Classes">
          <Headerh/>

      <Tabs defaultActiveKey="degreePlan" id="classTab">
        <Tab eventKey="degreePlan" title="Degree Plan">
          <DegreePlan />
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