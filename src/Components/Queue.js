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
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {auth, db } from "../firebase";
import withAuthorization from "./withAuthorization";
import Signup from "./SignUp";

//################### Sign Up Form ###################
const INITIAL_STATE = {
  name: "",
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
    const { name, message } = this.state;
        //creating a user in the database after the sign up through Firebase auth API
        db.makeQueue( name, message)
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
      name,
      message      
    } = this.state;
    //a boolen to perform validation
    

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="userName">Full Name</Label>
            <Input
              type="name"
              name="name"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={e =>
                this.setState(byPropKey("name", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Message</Label>
            <Input
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={e => 
                this.setState(byPropKey("message", e.target.value))}
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



const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Queue); //using a HoC to get access to history