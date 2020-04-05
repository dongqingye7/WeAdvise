import React, { Component } from "react";
import {Form, Col, InputGroup} from 'react-bootstrap'

class ProfileForm extends Component {
  handleSubmit(){

  }

  render() { 
    return (
      <Form >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={this.props.user.firstname}
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={this.props.user.lastname}
            defaultValue="Otto"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Major</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="CSE"
              required
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>        
      </Form>
      );
  }
}
 
export default Form;