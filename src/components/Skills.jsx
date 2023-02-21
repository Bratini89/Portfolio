import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import reacts from "../img/reacts.png";
import redux from "../img/redux.png";
import taildwin from "../img/taildwin.png";
import boostrap from "../img/boostrap.png";
import postgresql from "../img/postgresql.png";
import nodejs from "../img/nodejs.png";
import git from "../img/git.png";
import vsc from "../img/vsc.png";
import database from "../img/database.png";

const Skills = () => {
  return (
    <div
      style={{ boxShadow: "3px 3px 10px 3px lightblue" }}
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-slate-400/10 rounded-lg "
    >
      <h1 className="text-4xl m-auto mb-4 font-bold text-center text-[#001b5e]">
        Skills
      </h1>
      <Container className="m-auto">
        <Row className="mb-2 border-none">
          <Col className="m-auto">
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={html} />
              <Card.Body className="text-center">
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={css} />
              <Card.Body>
                <Card.Title className="text-center">CSS3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={javascript} />
              <Card.Body className="text-center">
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={reacts} />
              <Card.Body className="text-center">
                <Card.Title>React Js</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={redux} />
              <Card.Body className="text-center">
                <Card.Title>Redux</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={taildwin} />
              <Card.Body className="text-center">
                <Card.Title>Tailwind</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={boostrap} />
              <Card.Body className="text-center">
                <Card.Title>Boostrap-React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={postgresql} />
              <Card.Body className="text-center">
                <Card.Title>PostgreSQL</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={nodejs} />
              <Card.Body className="text-center">
                <Card.Title>Node Js</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={git} />
              <Card.Body className="text-center">
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={vsc} />
              <Card.Body className="text-center">
                <Card.Title>Visual Studio Code</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-auto"
              style={{
                width: "10rem",
                boxShadow: "3px 3px 10px 3px lightblue",
              }}
            >
              <Card.Img variant="top" src={database} />
              <Card.Body className="text-center">
                <Card.Title>Database</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
