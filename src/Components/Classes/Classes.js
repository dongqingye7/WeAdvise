import React from 'react';
import DegreePlan from './DegreePlan';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Classes() {
  return (
    <div className="Classes">
      <Tabs defaultActiveKey="degreePlan" id="classTab">
        <Tab eventKey="degreePlan" title="Degree Plan">
          <DegreePlan />
        </Tab>
        <Tab eventKey="courseTaken" title="Course Taken">
        </Tab>
        <Tab eventKey="courseNotTaken" title="Course Not Taken">
        </Tab>
      </Tabs>
      
    </div>
  );
}

export default Classes;