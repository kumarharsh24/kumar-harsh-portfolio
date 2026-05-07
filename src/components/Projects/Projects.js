import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import finance from "../../Assets/Projects/finance.png";
import bus from "../../Assets/Projects/bus.png";
import oldyoung from "../../Assets/Projects/oldyoung.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* AI Research Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Research Assistant"
              description="Built a Gemini-powered AI assistant integrating conversational memory, RAG-based document retrieval using FAISS, and real-time web search using Tavily. Designed modular agent workflows, query routing, and Streamlit-based interactive UI."
              ghLink="https://github.com/kumarharsh24"
              demoLink="https://ai-research-assistant-ixynu3txmzmshzvsjtmvet.streamlit.app/"
            />
          </Col>

          {/* Personal Finance Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Personal Finance Tracker"
              description="Full-stack finance management platform with transaction tracking, budgeting, analytics, secure authentication, CSV import/export, and AI-powered financial insights using OpenAI integration. Built using Node.js, Express.js, and PostgreSQL."
              ghLink="https://github.com/kumarharsh24"
              demoLink="https://personal-finance-tracker-hls3.onrender.com/"
            />
          </Col>

          {/* Sensor Fault Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sensor Fault Detection ML Pipeline"
              description="Developed an end-to-end machine learning pipeline for faulty wafer detection using sensor data. Implemented preprocessing, feature engineering, model training, evaluation, Flask deployment, and automated prediction workflows."
              ghLink="https://github.com/kumarharsh24"
            />
          </Col>

          {/* Old vs Young Classification */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oldyoung}
              isBlog={false}
              title="Old vs Young Image Classification"
              description="Built a lightweight deep learning model using PyTorch and ResNet for binary age-group classification from facial images. Implemented training workflows, experimentation pipelines, and achieved accurate image-based predictions."
              ghLink="https://github.com/kumarharsh24"
            />
          </Col>

          {/* Bus Booking System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Bus Booking System"
              description="Designed and developed a full-stack bus booking application with authentication, REST APIs, booking workflows, and database integration. Focused on backend system design and real-world transaction handling."
              ghLink="https://github.com/kumarharsh24"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
