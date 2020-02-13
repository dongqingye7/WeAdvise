import React, { Component } from 'react';


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
            <div className="card h-100">
                <h4 className="card-header">My Information</h4>
                <div className="card-body">
                    <p className="card-text">Name: {this.state.firstName+" "+this.state.lastName}</p>
                    <p className="card-text">Major: {this.state.major}</p>
                    <p className="card-text">Year: {this.state.yearAttend}</p>
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    }
}
 
export default UserInfo;