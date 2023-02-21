import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import carlos from "../assets/Carlos-Bratini.png";
import certificados from "../certificate/certificates.png";
import freecodecamp from "../certificate/freecodeCamp.png";
import cv from "../document/Carlos-Bratini-.pdf";
const About = () => {
  return (
    <div className="mt-4 mb-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-4 mb-4">
        About
      </h1>
      <Container className="text-center m-auto items-center flex">
        <Row>
          <Col className="m-auto">
            <p className="my-2 text-base font-normal text-stone-500">
              Hi, I'm Carlos Bratini, a web developer with experience in HTML,
              CSS, JavaScript, React.js, Redux, Tailwind, Bootstrap, Node.js,
              PostgreSQL, and Git and others technologies.
            </p>
            <p className="my-2 text-base font-normal  text-stone-500">
              I am a passionate young person who is continuously eager to learn
              new things, especially in the world of technology. I have a strong
              desire to be part of and contribute to the growth of this field
              with the knowledge that I have acquired.
            </p>
            <p className="my-2 text-base font-normal text-stone-500">
              Here you can see some of the certificates I have obtained in web
              development.
            </p>
            <ul>
              <li className="cursor-pointer">
                <a
                  href="https://certificates.academlo.com/en/credentials/carlosbratini576331"
                  target="_blank"
                >
                  Academlo Programing School 4 Certificates
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://www.freecodecamp.org/certification/bratini/responsive-web-design"
                  target="_blank"
                >
                  FreecodeCamp
                </a>
              </li>
            </ul>
            <Button
              className="font-bold mb-2"
              href="https://certificates.academlo.com/en/credentials/carlosbratini576331"
              target="_blank"
              variant="outline-info"
              size="sm"
            >
              {" "}
              <a href={cv} download="Developer-Carlos-Bratini-CV">
                Download CV
              </a>
            </Button>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "18rem",
                borderRadius: "50px",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img
                style={{ borderRadius: "50px" }}
                variant="top"
                src={carlos}
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="mt-4 mb-4 flex text-center">
        <Container className="text-center m-auto items-center flex">
          <Row className="m-auto">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-4 mb-4">
              Certificates
            </h1>
            <Col className="mb-2 m-auto">
              <Card
                className="m-auto"
                style={{
                  width: "18rem",
                  boxShadow: "3px 3px 10px 3px lightblue",
                }}
              >
                <Card.Img variant="top" src={certificados} />
                <Card.Body>
                  <Card.Title>4 Certificates Academlo</Card.Title>
                  <Card.Text className="my-2 text-base font-normal text-stone-500 text-sm">
                    <ul>
                      <li>
                        1. Foundations in Html, Css and Javascript module.
                      </li>
                      <li>2. Front-End Development with React module.</li>
                      <li>3. Back-End Development with Node.js module. </li>
                      <li>4. Full Stack Web Development program.</li>
                    </ul>
                  </Card.Text>
                  <br />
                  <Button
                    className="font-bold"
                    href="https://certificates.academlo.com/en/credentials/carlosbratini576331"
                    target="_blank"
                    variant="outline-info"
                    size="sm"
                  >
                    Click me to watch 4 certificates verified
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-auto">
              <Card
                className="m-auto"
                style={{
                  width: "18rem",
                  boxShadow: "3px 3px 10px 3px lightblue",
                }}
              >
                <Card.Img variant="top" src={freecodecamp} />
                <Card.Body>
                  <Card.Title>FreeCodeCamp</Card.Title>
                  <Card.Text className="my-2 text-base font-normal text-stone-500 text-sm">
                    Responsive Web Desing
                  </Card.Text>
                  <br />
                  <Button
                    className="font-bold"
                    href="https://ecommerce-bratini.onrender.com/api/v1/docs/#/"
                    target="_blank"
                    variant="outline-info"
                    size="sm"
                  >
                    Click me to watch the certificate verified
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
