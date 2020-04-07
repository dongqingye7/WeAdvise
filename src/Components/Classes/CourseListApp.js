import React from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

var course1 = {index: 1, courseName:"CSE 1105 Introduction to CSE", checked: false};
var course2 = {index: 2, courseName:"CSE 1320 Intermediate Programming", checked: false};
var course3 = {index: 3, courseName:"CSE 1325 Object-Oriented Programming", checked: false};
var course4 = {index: 4, courseName:"CSE 2100 Practical Computer Hardware / Software Systems", checked: false};
var course5 = {index: 5, courseName:"CSE 2312 Computer Organization & Assembly Language Programming", checked: false};
var course6 = {index: 6, courseName:"CSE 2315 Discrete Structure", checked: false};
var course7 = {index: 7, courseName:"CSE 2320 Algorithms & Data Structures", checked: false};
var course8 = {index: 8, courseName:"CSE 3302 Programming Language", checked: false};
var course9 = {index: 9, courseName:"CSE 3310 Fundaentals of Software Engineering", checked: false};
var course10 = {index: 10, courseName:"CSE 3315 Theoretical Concepts in Computer Science & Engineering", checked: false};

var AllCourses=[course1, course2, course3, course4, course5, course6, course7, course8, course9, course10];

class CourseListApp extends React.Component {
  constructor (props){
    super (props);
    this.state={
      AllCourses: AllCourses
    };
    this.deleteCourse = this.deleteCourse.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.checkCourse=this.checkCourse.bind(this);
  }

  deleteCourse(index){
    AllCourses.splice(index,1);
    this.setState({AllCourses: this.state.AllCourses});
  }

  addCourse(courseName){
    AllCourses.push({
      index: AllCourses.length+1,
      courseName: courseName.courseName,
      checked: false
    });
    this.setState({AllCourses: AllCourses});
  }

  checkCourse(index){
    console.log(AllCourses)
    var course = AllCourses.splice(index, 1);
    course[0].checked = !course[0].checked;
    AllCourses.splice(index, 0, course[0]);
    console.log(AllCourses)
    this.setState({AllCourses: AllCourses});
  }

  render (){
    return (
      <div className="card">
        <Container className="py-5 pr-5">
        <AppJumbotron title="Course Checklist" />
        <Row>
          <Col>
            <ItemList AllCourses={AllCourses} deleteCourse={this.deleteCourse} checkCourse={this.checkCourse}/>         
          </Col>         
        </Row>
        <br />
        <Row>
          <Col className="ml-5">
            <CourseForm  addCourse={this.addCourse}/>
            <br />          
          </Col>

        </Row>
        <Row>
          <Col className="ml-5">
            <CourseCount count={AllCourses.length} /> 
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}




class Item extends React.Component {
  constructor (props){
    super (props);
    this.checkClick = this.checkClick.bind(this); 
    this.deleteClick = this.deleteClick.bind(this);   
  }
  checkClick (){
    var index = parseInt(this.props.index);
    this.props.checkCourse(index);
  }

  deleteClick(){
    var index = parseInt(this.props.index);
    this.props.deleteCourse(index);
  }

  render (){
    let text = this.props.item.checked ? <strike>{this.props.item.courseName}</strike> : this.props.item.courseName;
    return (
        <div className="row">
          <div className="col-md-12">
    <input type="checkbox" onChange={this.checkClick} />&nbsp;{text}&nbsp;
            <IconButton aria-label="delete" onClick={this.deleteClick}>
              <DeleteIcon />
            </IconButton>
            <hr />
          </div>
        </div>
    );
  }
}


class ItemList extends React.Component {

  render (){
    var courses = this.props.AllCourses.map((course, index)=>{
      return(
          <Item key={index} item={course} index={index} deleteCourse={this.props.deleteCourse} checkCourse={this.props.checkCourse}/>
        );
    });
    return(
      <ul>{courses}</ul>
    );
  }
}

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.courseName.focus();
  }

  handleSubmit(event) {
    event.preventDefault();
    var courseName = this.refs.courseName.value;
    if(courseName) {
      this.props.addCourse({courseName});
      this.refs.form.reset();
    }
  }
  render() { 
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <label>
          Add a course: <br></br>
          <input type="text" ref="courseName" placeholder="Course Name" />
        </label>&nbsp;
        <Button variant="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

class CourseCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>There are {this.props.count} courses on your Course Checklist</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div>
        <h2 style={{textAlign: "center",}}>
          <div className="icon icon-shape bg-primary text-white rounded-circle shadow icon-md">
            <i className="fas fa-book" />
          </div>{this.props.title}
        </h2>

      </div>
    );
  }
}


export default CourseListApp;