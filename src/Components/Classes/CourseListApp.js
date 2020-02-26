import React from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class CourseListApp extends React.Component {
  constructor (props){
    super (props);
    this.state={
      AllCourses: AllCourses
    };
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(index){
    AllCourses.splice(index,1);
    this.setState(AllCourses=this.state.AllCourses);
  }
  render (){
    return (
      <div>
        <AppJumbotron title="Course Checklist" />
        <ItemList deleteCourse={this.deleteCourse}/>
        <br />
        <br />
        <br />
        <CourseCount count={AllCourses.length} />
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this); 
    this.deleteClick = this.deleteClick.bind(this);   
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }

  deleteClick(){
    var index = parseInt(this.props.index);
    console.log(index);
    this.props.deleteCourse(index);

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.courseName}</strike> : this.props.courseName;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}&nbsp;
            <IconButton aria-label="delete" onClick={this.deleteClick}>
              <DeleteIcon />
            </IconButton>
            <hr />
          </div>
        </div>
    );
  }
}

var course1 = "CSE 1105 Introduction to CSE";
var course2 = "CSE 1320 Intermediate Programming";
var course3 = "CSE 1325 Object-Oriented Programming";

var AllCourses = [course1, course2, course3];

class ItemList extends React.Component {

  render (){
    var courses = AllCourses.map((course, index)=>{
        return(
          <Item key={index} courseName={course} deleteCourse={this.props.deleteCourse}/>
        );
    });
    return(
      <ul>{courses}</ul>
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
      <div className="jumbotron">
        <h2 style={{textAlign: "center",}}>
          {this.props.title}
        </h2>

      </div>
    );
  }
}


export default CourseListApp;