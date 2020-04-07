import React, { Component } from "react";
import {Form, Col, InputGroup, Button} from 'react-bootstrap'

class ProfileForm extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      major: this.props.user.major,
      year: this.props.user.year,
      email: this.props.user.email
    }
  }

  render() { 
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      
    };

    return (
      <Form onSubmit={handleSubmit}>
      <Form.Row className="pt-4 pl-5">
        <Form.Group as={Col} md="4" controlId="firstname" className="mr-6">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Firstname"
            defaultValue={this.state.firstname}
            onChange={e =>
              this.setState({firstname: e.target.value})
            }
          />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Lastname"
            defaultValue={this.state.lastname}
            onChange={e =>
              this.setState({lastname: e.target.value})
            }
          />
        </Form.Group>
      </Form.Row>
      <Form.Row className="pl-5">
        <Form.Group as={Col} md="4" controlId="major" className="mr-6"> 
          <Form.Label>Major</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Major"
              defaultValue={this.state.major}
              required
              onChange={e =>
                this.setState({major: e.target.value})
              }
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="yearattend">
          <Form.Label>Year Attended</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="YearAttended"
              defaultValue={this.state.year}
              required
              onChange={e =>
                this.setState({year: e.target.value})
              }
            />
          </InputGroup>
        </Form.Group>
      </Form.Row> 
      <Form.Row className="pl-5 pb-4">
        <Form.Group as={Col} md="5" controlId="email">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Email"
              defaultValue={this.state.email}
              required
              onChange={e =>
                this.setState({email: e.target.value})
              }
            />
          </InputGroup>
        </Form.Group>
      </Form.Row> 
      <Form.Row className="pl-5 pb-4">
        <Button variant="primary" type="submit" > 
          Save
        </Button>          
      </Form.Row> 
   
      </Form>
      );
  }
}
 
export default ProfileForm;