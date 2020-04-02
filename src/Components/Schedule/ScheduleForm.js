// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import {auth, db } from "../../firebase";
// import withAuthorization from "../withAuthorization";
// import Header1 from "../Home/AdvisorHeader"



// const INITIAL_STATE = {
//     fname: "",
//     lname:"",
//     // Student_id:"",
//     // email:"",
//     // Adv_name:"",
//     // message: "",
   
//   };

//   const byPropKey = (propertyName, value) => () => ({
//     [propertyName]: value
//   });

// class ScheduleForm extends Component {

//     state = {
//         ...INITIAL_STATE
//       };
    

//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

//     onSubmit = event => {
//         const {  fname,
//             lname,
//             email,
//             Student_id,
//             Adv_name } = this.state;
//             //creating a user in the database after the sign up through Firebase auth API
//             db.makeQueue(  fname,
//                 lname
//                 )
//               .then(() => {
//                 this.setState({
//                   ...INITIAL_STATE,
//                 });
//                // history.push(routes.SIGN_IN); //redirects to Home Page
//               })
//               .catch(error => {
//                 this.setState(byPropKey("error", error));
//                 this.timer(); //show alert message for some seconds
//               });
            
         
    
//         event.preventDefault(); //prevents refreshing
//       };

//     render() { 

//         const {
//             fname,
//             lname
            
//           } = this.state;

//         return (
//             <Form>
//             <Form.Row>
//                 <Form.Group as={Col} controlId="formGridtext">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter first name" value={fname}
//               onChange={e =>
//                 this.setState(byPropKey("fname", e.target.value))
//               } />
                
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridtext">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter last name" value={lname}
//               onChange={e =>
//                 this.setState(byPropKey("lname", e.target.value))
//               } />
//                 </Form.Group>
//             </Form.Row>

//             <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" value={email}
//               onChange={e =>
//                 this.setState(byPropKey("email", e.target.value))
//               } />
//                 </Form.Group>
//             <Form.Row>
//                 <Form.Group as={Col} controlId="formGridnumber">
//                 <Form.Label>Student ID</Form.Label>
//                 <Form.Control type="number" placeholder="Enter Student ID" value={Student_id}
//               onChange={e =>
//                 this.setState(byPropKey("Student_id", e.target.value))
//               } />
//                 </Form.Group>
//             </Form.Row>

//             <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label>Advisor</Form.Label>
//                 <Form.Control as="select" value="Choose..." value={Adv_name}
//               onChange={e =>
//                 this.setState(byPropKey("Adv_name", e.target.value))
//               }>
//                     <option>Choose...</option>
//                     <option>Linda Barasch</option>
//                     <option>Katy Pedone</option>
//                     <option>Chris Conly</option>
//                     <option>Melissa Rose</option>

//                 </Form.Control>
//                 </Form.Group>


//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//             </Form>
//         );
//     }
// }
 
// const authCondition = authUser => !!authUser;

// export default withAuthorization(authCondition)(ScheduleForm);