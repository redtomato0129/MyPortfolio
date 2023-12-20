import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Never-More.png";
import emotion from "../../Assets/Projects/Aryabhatta Academy.png";
import editor from "../../Assets/Projects/editor.png";
import chatify from "../../Assets/Projects/portfolio.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="50 Front-end Project"
              description="This git repository consists of a collection of 50 carefully curated frontend projects that showcase your skills and creativity as a frontend developer. Each project is unique and visually stunning, demonstrating your proficiency in a wide range of technologies and design principles ."
              ghLink="https://github.com/SudeepAcharjee/The-50-Front-end-Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="Portfolio Web App: A dynamic GitHub repository showcasing a personalized web application for creating and managing professional portfolios. Tailored for individuals and creatives, it features an intuitive interface, customizable templates, and seamless integration to highlight skills, projects, and achievements in a visually compelling manner"
              ghLink="https://github.com/SudeepAcharjee/Portfolio"
              demoLink="https://sudeep-acharjee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Photo Editor"
              description="PhotoEditor Web App: An open-source GitHub repository offering a versatile online platform for image editing. Empowering users with a range of tools and filters, it provides a seamless and customizable experience for enhancing, retouching, and transforming photos directly in the web browser."
              ghLink="https://github.com/SudeepAcharjee/Photo-Editor"
              demoLink="https://photo-editor-30.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Never-More"
              description="We create simplified and interactive learning experiences. Learning web development should be easy to understand and available for everyone, everywhere! Never-More is a school for web developers, covering all the aspects of web development."
              ghLink="https://github.com/SudeepAcharjee/Never_more"
              demoLink="https://never-more.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Attendance System"
              description="Group Project made by bca 3rd sem students. Attendance web app for tracking and managing attendance, simplifying record-keeping and enhancing organizational efficiency. A website for IT department."
              ghLink="https://github.com/SudeepAcharjee/LCB-IT-dept"
              demoLink="https://lcbc-it-dept.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Online-Automated School Website"
              description="This is one of my freelancing project...A full-stack webapp for a school environment.This the not the real document ..its just a sample of the project. This is one my freelancing Project"
              ghLink="https://github.com/SudeepAcharjee/Aryabhatta-Academy"
              demoLink="https://check-school.netlify.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
