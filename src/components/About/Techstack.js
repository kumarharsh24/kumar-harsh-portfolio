import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiStreamlit,
  SiOpenai,
  SiDocker,
  SiGoogle
} from "react-icons/si";
import {
  FaDatabase,
  FaRobot,
  FaServer,
  FaBrain,
  FaCodeBranch,
  FaLaptopCode,
  FaMagic,
  FaLanguage,
  FaNetworkWired,
  FaCubes,
  FaProjectDiagram,
  FaSearch
} from "react-icons/fa";
import { TbBrain, TbTransform } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages & Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div className="tech-icons-text">Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-text">React.js</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git & GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* Backend & Application Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className="tech-icons-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <div className="tech-icons-text">Streamlit</div>
      </Col>

      {/* AI, Data & Machine Learning */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCodeBranch />
        <div className="tech-icons-text">LangChain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <div className="tech-icons-text">LangGraph</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearch />
        <div className="tech-icons-text">FAISS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbTransform />
        <div className="tech-icons-text">RAG Pipelines</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
        <div className="tech-icons-text">LLMs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <div className="tech-icons-text">OpenAI API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle />
        <div className="tech-icons-text">Gemini API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div className="tech-icons-text">Vector Databases</div>
      </Col>

      {/* Data Science / ML Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      {/* Conceptual & Developmental Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <FaServer />
        <div className="tech-icons-text">REST APIs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer />
        <div className="tech-icons-text">Backend</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaptopCode />
        <div className="tech-icons-text">Full-Stack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrain />
        <div className="tech-icons-text">Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <div className="tech-icons-text">Deep Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLanguage />
        <div className="tech-icons-text">NLP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMagic />
        <div className="tech-icons-text">Prompt Engineering</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <div className="tech-icons-text">DSA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCubes />
        <div className="tech-icons-text">OOPs</div>
      </Col>
    </Row>
  );
}

export default Techstack;
