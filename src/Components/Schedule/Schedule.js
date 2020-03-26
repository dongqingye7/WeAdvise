import withAuthorization from "../withAuthorization";
import React from 'react';
import Container from 'react-bootstrap/Container'
import ScheduleForm from './ScheduleForm.js';

function Schedule() {
  return (
    <div className="Schedule">
      <Container>
        <ScheduleForm />
      </Container>
    </div>
  );
}


const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(Schedule);