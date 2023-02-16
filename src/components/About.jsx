import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="mt-4 mb-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mt-4 mb-4">
        About
      </h1>
      <img src="../assets/EcommerceNodeJs.png" alt="" />
      <Container className="text-center items-center">
        <Row>
          <Col>
            <p className="text-left w-full py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              molestias excepturi optio doloremque quia quas, ipsa unde dolorem
              architecto magni beatae possimus repudiandae aliquid nostrum
              provident amet dicta. Aspernatur, officiis!
            </p>
            <p className="text-left  w-full py-8">
              Over the years, I have worked on a wide variety of programming
              projects, from creating mobile apps to building large-scale web
              applications. I have experience with several different programming
              languages, including list some of the programming languages you
              know, and I'm always eager to learn more.{" "}
            </p>
            <p className="text-left w-full py-8">
              As a programmer, I am committed to writing code that is not only
              functional, but also efficient, maintainable, and scalable. I
              believe that good code should be easy to understand and easy to
              build upon, and I always strive to make my code as clean and
              well-organized as possible.
            </p>
            <p className="text-left w-full py-8">
              In addition to my technical skills, I pride myself on my ability
              to work well with others. I believe that good communication and
              collaboration are essential to the success of any project, and I'm
              always eager to work with other programmers, designers, and
              stakeholders to create the best possible solutions.
            </p>
          </Col>
          <Col xs={4}>
            <img
              className="rounded-t-full shadow-xl shadow-gray-600"
              src="https://scontent.fhex5-2.fna.fbcdn.net/v/t1.6435-9/60356900_10158444842623272_7941607964408807424_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE6-YpSib4DhNtyLG4xxsv3CFlWn4AlyagIWVafgCXJqKbMw0BqrOZrczpgMlYbEeA&_nc_ohc=8Ht8th8cu7kAX-3x_Ob&_nc_ht=scontent.fhex5-2.fna&oh=00_AfCzkoOj9O1Ew1Tvv0TWBivmQJEfJf_fpfmiyAL6r_b-Jw&oe=64150D9B"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
