// import React, { Component } from "react";

// import { auth, db } from "../firebase";
// import {firebase} from "../firebase/index"

// const INITIAL_STATE = {
//     username: "",
//     email: "",
    
//   };

//   const byPropKey = (propertyName, value) => () => ({
//     [propertyName]: value
//   });

// class Queue extends Component {
//     state = {
//         ...INITIAL_STATE
//       };

//       onSubmit = event => {
  
//         auth
//         .doCreateUserWithEmailAndPassword(email, passwordOne)
//         //it the above f unctions resolves, reset the state to its initial state values, otherwise, set the error object
//         .then(authUser => {
//           //creating a user in the database after the sign up through Firebase auth API
//           db.doCreateUser(authUser.user.uid, username, email)
//             .then(() => {
//               this.setState({
//                 ...INITIAL_STATE,
//                 roles
//               });
//               history.push(routes.SIGN_IN); //redirects to Home Page
//             })
//          })   }

  
//     render() {
//         const {
//             username,
//             email,
           
            
//           } = this.state;
//       return (
//         <form onSubmit={this.onAddMessage}>
//           <input type="text" ref={node => this.input = node}/>
//           <input type="submit"/>
//           <ul>
//             {this.state.messages.map(message =>
//               <li key={message.id}>{message.text}</li>
//             )}
//           </ul>
//         </form>
//       );
//     }
//   }
  
//   export default Queue;


import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import * as ROLES from '../constants/roles'
import * as routes from "../constants/routes";
import { auth, db } from "../firebase";
import Grid from '@material-ui/core/Grid';



//################### Sign Up Form ###################
const INITIAL_STATE = {
  username: "",
  message: "",
 
};

//A Higher order function with prop name as key and the value to be assigned to
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class Queue extends Component {
  //defining state
  state = {
    ...INITIAL_STATE
  };

  

  onSubmit = event => {
    const { username, message } = this.state;
    const { history } = this.props;
         
        //creating a user in the database after the sign up through Firebase auth API
        db.makeQueue(username, message)
          .then(() => {
            this.setState({
              ...INITIAL_STATE,
            });
           // history.push(routes.SIGN_IN); //redirects to Home Page
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
            this.timer(); //show alert message for some seconds
          });
      
     

    event.preventDefault(); //prevents refreshing
  };

 

  render() {
    const {
      username,
      message      
    } = this.state;
    //a boolen to perform validation
    

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="userName">Full Name</Label>
            <Input
              type="username"
              name="username"
              id="userName"
              placeholder="Name"
              value={username}
              onChange={e =>
                this.setState(byPropKey("username", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Message</Label>
            <Input
              type="text"
              name="email"
              id="exampleEmail"
              value={message}
              onChange={e => this.setState(byPropKey("message", e.target.value))}
            />
          </FormGroup>
          <div className="text-center">
            <Button  type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}



//exports
export default (Queue); //using a HoC to get access to history
