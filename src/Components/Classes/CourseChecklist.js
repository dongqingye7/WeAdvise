import React from 'react';
import CourseListApp from './CourseListApp';
import Container from 'react-bootstrap/Container'

function CourseChecklist() {
    var todoItems = [];
    todoItems.push({index: 1, value: "CSE 1105 INTRODUCTION TO CSE", done: false});
    todoItems.push({index: 2, value: "CSE 1320 Intermediate Programming", done: true});
    todoItems.push({index: 3, value: "CSE 1325 Object-Oriented Programming", done: true});

    return (
      <div className="CourseChecklist">
        <Container>
            <CourseListApp initItems={todoItems}/>
        </Container>
        
      </div>
    );
  }
  
  export default CourseChecklist;