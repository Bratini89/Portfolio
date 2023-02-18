import React from "react";
import EcommerceNojejs from "../assets/EcommerceNodeJs.png";
import EcommerceReact from "../assets/EcommerceReact.png";
import Pokedex from "../assets/Pokedex.png";
import RandomQuote from "../assets/RandomQuote.png";
import UserCrud from "../assets/UserCrud.png";
import WeatherApp from "../assets/WeatherApp.png";
import RickyAndMorty from "../assets/RickyAndMorty.png";
import academlo from "../assets/academlo.png"
import carrusel from "../assets/carrusel.png"
import { Button, Card, Col, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl mb-10 mt-4 font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <Row xs={1} md={2} xl={3} className="g-4 ">
        <Col>
          <Card>
            <Card.Img variant="top" src={UserCrud} />
            <Card.Body>
              <Card.Title className="text-center ">
                Crud TO-DO
              </Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                React Js and Axios with some dependencies.
                <br /> <br />
                <Button href="https://users-crud-89.netlify.app/" target="_blank" variant="outline-primary" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={academlo} />
            <Card.Body>
              <Card.Title className="text-center">E-Commerce</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                Html, Css3 and javascript. Responsive desing.
                <br /><br />
                <Button href="https://heartfelt-pika-3b1514.netlify.app/" target="_blank" variant="outline-secondary" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={WeatherApp} />
            <Card.Body>
              <Card.Title className="text-center">Weather App</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                React js, Apis, Axios, Props, States.
                <br /><br />
                <Button href="https://weatherapp-88.netlify.app/" target="_blank" variant="outline-success" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={RickyAndMorty} />
            <Card.Body>
              <Card.Title className="text-center">Ricky and Morty App</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                React js, css3, Axios, Apis.
                <br /><br />
                <Button href="https://rickandmorty89.netlify.app/" target="_blank" variant="outline-warning" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Pokedex} />
            <Card.Body>
              <Card.Title className="text-center">Pokemon App</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
              React Js, Redux, React-Route, Axios, UseForm, UseNavigate, Apis y CSS3, and others dependencies.
                <br /><br />
                <Button href="https://pokeapi-1989.netlify.app/" target="_blank" variant="outline-danger" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={RandomQuote} />
            <Card.Body>
              <Card.Title className="text-center">Random quote</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                React js, Props, States, Css.
                <br /><br />
                <Button href="https://ramdon-quote.netlify.app/" target="_blank" variant="outline-info" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={EcommerceReact} />
            <Card.Body>
              <Card.Title className="text-center">E-Commerce</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
              React Js, Redux, Boostrap-React, React-Route, Axios, CSS3. 
                <br /> <br />
                <Button href="https://users-crud-89.netlify.app/" target="_blank" variant="outline-dark" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={EcommerceNojejs} />
            <Card.Body>
              <Card.Title className="text-center">E-Commerce (Backend)</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                Node Js, PostgreSQL, Express, Sequelize, Swagger, Render, API Rest, Database and others dependencies.
                <br /><br />
                <Button href="https://ecommerce-bratini.onrender.com/api/v1/docs/#/" target="_blank" variant="outline-info" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={carrusel} />
            <Card.Body>
              <Card.Title className="text-center">Carrusel Img Rotate</Card.Title>
              <Card.Text className="text-center my-2 text-base font-normal text-stone-500">
                Html and Css
                <br /><br />
                <Button href="https://users-crud-89.netlify.app/" target="_blank" variant="outline-info" size="sm">
                CLICK ME TO WATCH THE DEMO
              </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
