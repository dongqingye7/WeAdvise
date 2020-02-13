import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Calendar from "react-material-ui-calendar";

class CalendarComponent extends Component {
    state = {  }
    render() { 
        return (
            <Card>
                <Calendar
                    generalStyle={{
                        maxWidth: "100%",
                        margin: "0 auto",
                        backgroundColor: "rgba(256,256,256,1)",
                        height: "100%",
                        overflow: "auto"
                    }}
                    light={true}
                />
            </Card>
        );
    }
}
 
export default CalendarComponent;