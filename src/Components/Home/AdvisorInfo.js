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
        var advisor1 = {AdvisorID: 0, firstName: "Linda", lastName: "Barasch", office: "ERB 643"};
        var advisor2 = {AdvisorID: 1, firstName: "Christopher", lastName: "Conly", office: "ERB 642"};
        var advisor3 = {AdvisorID: 1, firstName: "Katy", lastName: "Pedone", office: "ERB 645"};
        var advisor4 = {AdvisorID: 1, firstName: "Melissa", lastName: "Rose", office: "ERB 644"};

        this.state.advisors.push(advisor1);
        this.state.advisors.push(advisor2);
        this.state.advisors.push(advisor3);
        this.state.advisors.push(advisor4);

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