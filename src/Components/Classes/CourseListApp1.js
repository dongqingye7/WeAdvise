/*
CourseList app structure

CourseListApp
	- CourseList
    - CourseListItem #1
		- CourseListItem #2
		  ...
		- CourseListItem #N
	- CourseListForm
*/
import React from 'react';
import './style.css';
import { IoMdCheckmarkCircleOutline }from "react-icons/io";


var courseItems = [];
courseItems.push({index: 1, value: "CSE 1105 INTRODUCTION TO CSE", done: false});
courseItems.push({index: 2, value: "CSE 1320 Intermediate Programming", done: true});
courseItems.push({index: 3, value: "CSE 1325 Object-Oriented Programming", done: true});

class CourseList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <CourseListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class CourseListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <button type="button" className="IoMdCheckmarkCircleOutline icon" onClick={this.onClickDone}></button>
          <IoMdCheckmarkCircleOutline type="button" value={{ className: 'icon' }} aria-hidden="true" onClick={this.onClickDone} />
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

class CourseListForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="Add a new courses..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}
  
  
class CourseListApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {courseItems: courseItems};
  }
  addItem(todoItem) {
    courseItems.push({
      index: courseItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({courseItems: courseItems});
  }
  removeItem (itemIndex) {
    courseItems.splice(itemIndex, 1);
    this.setState({courseItems: courseItems});
  }
  markTodoDone(itemIndex) {
    var todo = courseItems[itemIndex];
    //courseItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    //todo.done ? courseItems.push(todo) : courseItems.unshift(todo);
    this.setState({courseItems: courseItems});  
  }
  render() {
    return (
      <div id="main">
        <h3> Lets go for a <IoMdCheckmarkCircleOutline />? </h3>
        <CourseList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <CourseListForm addItem={this.addItem} />
      </div>
    );
  }
}
export default CourseListApp;

//ReactDOM.render(<CourseListApp initItems={courseItems}/>, document.getElementById('app'));