import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import carlos from "../assets/Carlos-Bratini.png"
const About = () => {
  return (
    <div className="mt-4 mb-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-4 mb-4">
        About
      </h1>
      <img src="../assets/EcommerceNodeJs.png" alt="" />
      <Container className="text-center m-auto items-center flex">
        <Row>
          <Col className="m-auto">
            <p className="my-2 text-base font-normal text-stone-500">
            Hi, I'm Carlos Bratini, a web developer with experience in HTML, CSS, JavaScript, React.js, Redux, Tailwind, Bootstrap, Node.js, PostgreSQL, and Git and others technologies.
            </p>
            <p className="my-2 text-base font-normal  text-stone-500">
            I am a passionate young person who is continuously eager to learn new things, especially in the world of technology. I have a strong desire to be part of and contribute to the growth of this field with the knowledge that I have acquired.
            </p>
            <p className="my-2 text-base font-normal text-stone-500" >
            Here you can see some of the certificates I have obtained in web development.
            </p>
            <ul>
              <li><a href="https://certificates.academlo.com/en/credentials/carlosbratini576331" target="_blank">Academlo Programing School 4 Certificates</a></li>
              <li><a href="https://www.freecodecamp.org/certification/bratini/responsive-web-design" target="_blank">FreecodeCamp</a></li>
            </ul>
          </Col>
          <Col>
          <Card className="m-auto" style={{ width: "18rem" , borderRadius: '50px', boxShadow: "3px 3px 10px 3px lightblue" }}>
      <Card.Img style={{  borderRadius: '50px'}} variant="top" src={carlos} />
    </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
