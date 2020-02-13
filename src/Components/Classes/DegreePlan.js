import React, { Component }from 'react';
import Image from 'react-bootstrap/Image';
import Img from './Flowchart.jpg';

class DegreePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container">
                <Image src={Img} fluid/>
            </div> 
            
        );
    }
}
 
export default DegreePlan;