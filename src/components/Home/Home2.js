import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi 👋, I'm a <b className="purple">MERN Stack Developer & Machine Learning Enthusiast</b>
              {" "}currently pursuing my B.Tech at <b className="purple">IIT Jodhpur</b>.
              <br />
              <br />
              I'm passionate about solving problems and building end-to-end
              <i>
                <b className="purple"> Machine Learning and full-stack (MERN) applications. </b>
              </i>
              <br />
              <br />
              My core interests lie in
              <i>
                <b className="purple"> AI, Data Analytics, and Backend Systems. </b>
              </i>
              I am highly focused on creating scalable, real-world, production-ready solutions.
              <br />
              <br />
              Currently, I'm exploring new technologies like
              <b className="purple"> MLOps, FastAPI, and System Design </b> to turn ideas into usable products.
              <br />
              <br />
              Furthermore, I have a strong foundation in problem-solving and am proficient in
              <i>
                <b className="purple"> Data Structures and Algorithms (DSA) in C++. </b>
              </i>
              <br />
              <br />
              <i>"Building systems that actually work in the real world."</i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
