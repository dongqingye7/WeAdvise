import React from 'react';
import DegreePlan from './DegreePlan';
import CourseChecklist from './CourseChecklist';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Classes() {
  return (
    <div className="Classes">
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

export default Classes;