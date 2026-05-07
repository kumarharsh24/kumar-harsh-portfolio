import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";

function Contact() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        {/* HEADING */}
        <h1 className="project-heading">
          Contact <strong className="purple">Me</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Feel free to connect with me for any questions,
          collaborations or just to say hi!
        </p>

        {/* CONTACT CARDS */}
        <Row
          style={{
            justifyContent: "center",
            gap: "25px",
            paddingBottom: "40px",
          }}
        >
          {/* GITHUB */}
          <Col md={3} sm={10} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <div style={{ fontSize: "3rem", marginBottom: "20px", color: "white" }}>
                  <AiFillGithub />
                </div>
                <Card.Title style={{ marginBottom: "20px" }}>GitHub</Card.Title>
                <Card.Text style={{ textAlign: "center", minHeight: "50px" }}>
                  Check out my repositories and open-source contributions.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/kumarharsh24"
                  target="_blank"
                >
                  <AiFillGithub /> &nbsp; Visit GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* EMAIL */}
          <Col md={3} sm={10} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <div style={{ fontSize: "3rem", marginBottom: "20px", color: "white" }}>
                  <AiOutlineMail />
                </div>
                <Card.Title style={{ marginBottom: "20px" }}>Email</Card.Title>
                <Card.Text style={{ textAlign: "center", minHeight: "50px" }}>
                  Drop me an email and I will get back to you as soon as possible.
                  kumarharsh7631@gmail.com
                </Card.Text>
                <Button
                  variant="primary"
                  href="mailto:kumarharsh7631@gmail.com"
                  target="_blank"
                >
                  <AiOutlineMail /> &nbsp; Email Me
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* PHONE */}
          <Col md={3} sm={10} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <div style={{ fontSize: "3rem", marginBottom: "20px", color: "white" }}>
                  <AiOutlineMobile />
                </div>
                <Card.Title style={{ marginBottom: "20px" }}>Phone</Card.Title>
                <Card.Text style={{ textAlign: "center", minHeight: "50px" }}>
                  You can reach out to me directly via phone call or WhatsApp.

                  9508913822
                </Card.Text>
                <Button
                  variant="primary"
                  href="tel:+919508913822"
                  target="_blank"
                >
                  <AiOutlineMobile /> &nbsp; Call Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;