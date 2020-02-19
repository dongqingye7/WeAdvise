import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CalendarComponent extends Component {
    state = {  }
    render() { 
        const calendarStyle = {
            width: "auto"
        
          };
        return (
            <Card>
                <iframe style={calendarStyle} title="CalendarFrame" src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bHJyOTJhcjBuOXRvM25kZTlna2ZlbDFzNWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bTd1MDMzczd1OW04MGtoYW50MXBidHYzY2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y3NlLWRlcHRAdXRhLmVkdQ&amp;src=ZG8wNWU0bTc1YmlqbjlpcHBpbXQybzhiZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aDhkODNhZnBpY2x2ZHZ0M3VxNjlxdGxhODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWdkOWdiMGJrazhob2Fsdmptc2NuamZmaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;color=%23EF6C00&amp;color=%23D50000&amp;color=%2333B679&amp;color=%23B39DDB&amp;color=%23039BE5&amp;title=CSE%20Undergrad%20Advising%20Schedule&amp;showTabs=0&amp;showCalendars=0" styles="border-width:0" width="1020" height="800" frameborder="0" scrolling="no"></iframe>         

            </Card>
        );
    }
}
 
export default CalendarComponent;