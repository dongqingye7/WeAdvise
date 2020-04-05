import React, { Component }from 'react';
import Img from './Flowchart.jpg';
import { Container } from '@material-ui/core';

class DegreePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="container align-content-center">
                <img src={Img} alt="CS" height="100%" width="100%"></img>
            </div>
            
        );
    }
}
 
export default DegreePlan;