import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kumar Harsh</span>{" "}
            from <span className="purple">Jodhpur, Rajasthan, India</span>.
            <br />
            I am a <span className="purple">B.Tech Undergraduate</span> at{" "}
            <span className="purple">IIT Jodhpur</span>, passionate about AI/ML, GenAI, and Full-Stack Development.
            <br />
            I have worked on multiple self-driven AI/ML and full-stack projects including an{" "}
            <span className="purple">AI Research Assistant, Personal Finance Tracker,</span> and <span className="purple">Sensor Fault Detection ML Pipeline</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA problems 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Building AI projects & exploring new technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about startups and AI systems 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech/product engineering content 🎥
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that actually work in the real world."{" "}
          </p>
          <footer className="blockquote-footer">Kumar Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
