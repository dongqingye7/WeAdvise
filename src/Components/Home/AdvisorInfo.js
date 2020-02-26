import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



class AdvisorInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advisors: []
        }
    }
    render() { 
        var advisor1 = {AdvisorID: 0, firstName: "Bob", lastName: "Smith", office: "ERB 001"};
        var advisor2 = {AdvisorID: 1, firstName: "Mary", lastName: "Lisa", office: "ERB 002"};

        this.state.advisors.push(advisor1);
        this.state.advisors.push(advisor2);
        let advisorlist=this.state.advisors.map((advisor, i)=> {
            return (
                <div>
                    <li key={i}> Name: {advisor.firstName} {advisor.lastName}</li>
                    <li>Office: {advisor.office}</li>
                    <hr></hr>                    
                </div>
            );
        });
        return (
            <Card border="primary">
                <Card.Header>Advisor Information</Card.Header>
                <Card.Body>
                    <Card.Text>
                        
                        {advisorlist}
                                           
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
 
export default AdvisorInfo;