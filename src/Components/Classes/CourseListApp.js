import React from 'react';
import './style.css';

class CourseListApp extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div>
        <AppJumbotron title="Course Checklist" />
        <ItemList />
        <br />
        <br />
        <br />
        <ItemCount count={allTheThings.length} />
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="CSE 1105 Introduction to CSE" />;
let item3 = <Item message="CSE 1320 Intermediate Programming" />;
let item4 = <Item message="CSE 1325 Object-Oriented Programming" />;

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>There are {this.props.count} items on your list</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div className="jumbotron">
        <h2 style={
          {textAlign: "center",
          backgroundColor: '#61DAFB'}}>
          {this.props.title}
        </h2>
      </div>
    );
  }
}

class AppFooter extends React.Component {
  render (){
    return (
      <div className="text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    );
  }
}
export default CourseListApp;