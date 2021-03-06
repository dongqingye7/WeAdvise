import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import withAuthorization from "../withAuthorization";
import Header from "./Header.js";
import {Container,Card, CardHeader, CardContent} from '@material-ui/core';
import Header1 from "./AdvisorHeader";
import Navbar from "./Navbar"
import Footer from "../Layouts/Footer/AuthFooter"


class AdvisorHome extends React.Component {

  render() {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-info pt-7 pb-4">
    <Container>
      <Header />
    </Container>
    
    {/* Page content */}
    
    <Container className="mt--7" fluid>
      <Row className="mb-3">
          <Header1/>
      </Row>
      
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="bg-default">
            <CardContent>
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Overview
                  </h6>
                  <h2 className="text-white mb-0">Monthly Calendar</h2>
                </div>
              </Row>
              <Row>
                <Container className="align-content-center pl-7 pt-4">
                
                    <iframe width="100%" title="CalendarFrame" src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bHJyOTJhcjBuOXRvM25kZTlna2ZlbDFzNWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bTd1MDMzczd1OW04MGtoYW50MXBidHYzY2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y3NlLWRlcHRAdXRhLmVkdQ&amp;src=ZG8wNWU0bTc1YmlqbjlpcHBpbXQybzhiZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aDhkODNhZnBpY2x2ZHZ0M3VxNjlxdGxhODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWdkOWdiMGJrazhob2Fsdmptc2NuamZmaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;color=%23EF6C00&amp;color=%23D50000&amp;color=%2333B679&amp;color=%23B39DDB&amp;color=%23039BE5&amp;title=CSE%20Undergrad%20Advising%20Schedule&amp;showTabs=0&amp;showCalendars=0" styles="border-width:0" height="800" frameborder="0" scrolling="no"></iframe>         
                  
                </Container>                
              </Row>

            </CardContent>
          </Card>
        </Col>

      </Row>
      <Footer />
    </Container>
    </div>
  </>
  );
}
}
// export default withAuthorization(authCondition)(AccountPage);
const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(AdvisorHome); //grants authorization to open endpoint if an user is signed in
