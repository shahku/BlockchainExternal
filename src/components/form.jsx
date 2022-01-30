import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../S2.png";
class Forms extends Component {
  canBeSubmitted() {
    const { fname, lname, course, email } = this.state;
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      course.length > 0 &&
      email.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
    //console.log(this);
  };

  state = {
    fname: "",
    lname: "",
    course: "",
    email: ""
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh%",
          //backgroundImage: `url(${b1})`,
          background: `url(${b1}) no-repeat `,
          backgroundSize: "cover",
          border: "1px solid black",
          height: "100vh",
          width: "100%"
        }}
      >
       
        <div
          style={{ marginTop: "150px",marginBottom: "200px", background: "rgba(255, 255, 255, 0.6)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Identification Number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Diagnosis & Prescription"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="MC Duration"
              />
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Add certificate
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
