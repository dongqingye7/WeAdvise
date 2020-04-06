import withAuthorization from "../withAuthorization";
import React from 'react';
import Container from 'react-bootstrap/Container'
import ScheduleForm from './ScheduleForm.js';
import { Card } from "react-bootstrap";

function Schedule() {
  return (
    <div className="Schedule">
      <Container>
        <Card className="p-5">
          <ScheduleForm />
        </Card>
        
      </Container>
    </div>
  );
}


const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(Schedule);