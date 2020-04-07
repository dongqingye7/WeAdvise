import React from 'react';
import Headerh from "../Layouts/Header"
import Accordion from 'react-bootstrap/Accordion'
import {Button, Card} from 'react-bootstrap';

function Help() {
  return (
    <>
    <Headerh/>
    <div className="container pt-7">
    <Card>
      <h1 className="text-center p-3">Frequently Asked Questions</h1>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-lg text-info">
              How to schedule an appointment with an advisor?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <ul>
                    <li>On the top of navigation bar, click "Schedule Appointment"</li>
                    <li>Please fill out the Appointment Request Form and click "Submit"</li>
                    <li>You will see your current waitline on the homepage</li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-lg text-info">
              How to contact my advisor?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  Please click the button below and email your questions.
                </li>
                
                  <a href="mailto:cseugadvising@uta.edu">
                    <Button className="mt-3">
                      Contact Advisor
                    </Button>
                  </a>                  
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2" className="text-lg text-info">
              How to edit my information?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
                <ul>
                    <li>On the top of navigation bar, click "About Me"</li>
                    <li>Please click "Save" after editing your information </li>
                    <li>You information will be updated automatically</li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
    </div>
    </>
  );
}

export default Help;