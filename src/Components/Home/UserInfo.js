import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            utaID: 0,
            firstName: "John",
            lastName: "Smith",
            major: "Computer Science",
            yearAttend: "2016",
        }
    }
    render() { 
        return (
            <Card border="primary">
                <Card.Header>My Information</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Name: {this.state.firstName+" "+this.state.lastName}</p>
                        <p>Major: {this.state.major}</p>
                        <p>Year: {this.state.yearAttend}</p>                        
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
 
export default UserInfo;