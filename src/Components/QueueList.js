
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import { Button, Card, Row, Col } from "react-bootstrap";
import firebase from "firebase/app";
import Headerh from "./Layouts/Header";
import React, { Component, Children } from "react";
import * as routes from "../constants/routes";
import { KeyboardAwareScrollView } from "react";
import { Appbar } from "react";
import { StyleSheet, Text, View, TextInput } from "react"; //!< Import various designing tools from react-native mainly for Styling
import Navbar from "./Advisor/Navbar";
import {Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Typography} from '@material-ui/core';


class QueueList extends Component {
   state = {
    Queue:[] ,
   }
    ondelete = (key) => {
      const { history } = this.props; 
        //   var Q= firebase.database().ref("Queue");
        //  Q.child(key).name.remove(); 
         
  
      console.log("this is the keuy ---------------------------"+ key);
      }; 
  componentDidMount() {
   db.doGetQueue().then(snapshot =>
      this.setState(() => ({ Queue: snapshot.val() }))
    );
  }

  render() {
<<<<<<< HEAD
    const { Queue } = this.state;
    return (
      <div className='container'>
  <section className='display-item'>
    <div className="wrapper">
    <h2>List of Students on Advising Queue</h2>

    { Object.keys(Queue).map(key =>
    <div key={key}>{Queue[key].name}  {Queue[key].Advisor} {Queue[key].message} {Queue[key].Student_id}
      <Button variant="outline-danger" onClick={this.ondelete( key)} > Delete</Button>
      </div>
  )
     }
    </div>
  </section>
</div>
    );}
=======
    
    const { Queue } = this.state;
    return (
      <>
      <Navbar />
      <div className="container pt-7 pb-4">
      
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        
      <TableHead>
      {/* <Typography variant="h5" component="div" className="">Current Queue</Typography> */}
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Advisor</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Student ID</TableCell>
            <TableCell >Edit</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      { !!Queue && Object.keys(Queue).map(key =>
        <TableRow key={key.name}>
              <TableCell component="th" scope="row">{Queue[key].name}</TableCell>
              <TableCell >{Queue[key].Advisor}</TableCell>
              <TableCell >{Queue[key].message}</TableCell>
              <TableCell >{Queue[key].Student_id}</TableCell>
              <TableCell ><Button variant="outline-danger" onClick={this.ondelete}>Delete</Button></TableCell>

        </TableRow>
  //   <div key={key}>{Queue[key].name}  {Queue[key].Advisor} {Queue[key].message} {Queue[key].Student_id}
  // <Button variant="outline-danger" onClick={this.ondelete}>Delete</Button>
  //   </div>
  )}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
    </>
    );
    }
>>>>>>> 516632bcc1fde61e9a8c6d864e93f968ffd0886a
}


const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(QueueList); //grants authorization to open endpoint if an user is signed in




// import withAuthorization from "./withAuthorization";
// import { db } from "../firebase";
// import { Button, Card, Row, Col } from "react-bootstrap";
// import firebase from "firebase/app";
// import Headerh from "./Layouts/Header";
// import React, { Component, Children, FlatList } from "react";
// import * as routes from "../constants/routes";
// import { KeyboardAwareScrollView } from "react";
// import { Appbar } from "react";
// // import Search from "./src/components/Search";//!< Imports search component in this screen
// import { StyleSheet, Text, View, TextInput } from "react"; //!< Import various designing tools from react-native mainly for Styling


//  class QueueList extends Component {
   
//   constructor(props){
//     super(props);
//     this.state = {
//         q_list: [],
//         uid:'',
//     }
// }
// updatelist=q_list=>{
//   this.setState({q_list:[...this.state.q_list, q_list]});
// }

// ondelete = (itemid)=>{
//   var itemref = firebase.database().ref("Queue");
//       itemref.child(itemid).remove();     
//       }
  
// iteminfo=itemid=>{
//   var itemref = firebase.database().ref("Queue");
//   itemref.once("value", data=>{
//       const name= data.child(itemid).val().name;      
//   })
// }
// componentDidMount(){
//   var self = this;
//     var user = firebase.auth().currentUser;
//     var uid;
    
  
//   var itemref = firebase.database().ref("Queue");
//   itemref.once("value",dataSnapShot=>{
//       if(dataSnapShot.val()){
//           let dobobj = Object.values(dataSnapShot.val());
//           for (var i = 0; i < dataSnapShot.numChildren(); i++) {
//               if(dobobj[i].uid == uid){
//               self.updatelist(dobobj[i]);
//               }
//           }
          
//       }
//   })
// }
// render(){
//   return(
//           <View >
//           <View >
//               <Text >Item(s) you have</Text>
//           </View>
//           <FlatList
//           data={this.state.q_list}
         
//           inverted
//           keyExtractor={(item, index)=> index.toString()}
//           renderItem={({item})=>(
//               <Card style={{backgroundColor:'#393636'}} >
//                   <View >
//                   <Text >{"Item Name: " +item.name }</Text>
//                   </View>
              
//           </Card> 
//           )}
//           ></FlatList>
//           </View>
//   )
// }
//  }


// const authCondition = authUser => !!authUser;

// export default withAuthorization(authCondition)(QueueList); //grants authorization to open endpoint if an user is signed in


