import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sudeep Acharjee </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I am currently a student of BCA.
            <br />
            I have completed my schooling from Barpeta Road and now staying in Guwahati for Degree.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Use your brain as a processor!"{" "}
          </p>
          <footer className="blockquote-footer">Sudeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
