import React from 'react';
import CourseListApp from './CourseListApp';
import Container from 'react-bootstrap/Container'

function CourseChecklist() {
    return (
      <div className="CourseChecklist bg-white">
        <Container>
            <CourseListApp/>
        </Container>
        
      </div>
    );
  }
  
  export default CourseChecklist;