import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import james from "../assets/james.jpg";

const Main = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
      id="main"
    >
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={james}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            {" "}
            I'm Carlos Bratini
          </h1>

          <h2 className="flex sm:text-3xl font-bold text-2xl pt-4 text-gray-800">
            I'm a <FcBusinessman size={40} />
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "Web developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast ",
                2000,
              ]}
              // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              wrapper="div"
              cursor={true} // Animation will be rendered as a <span>
              repeat={Infinity}
              // Repeat this Animation Sequence infinitely
            />
          </h2>
          <div className="flex justify-evenly pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/carlos-bratini-008962246/"
              target="_blank"
              name="linkedIn"
            >
              {" "}
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/Bratini89"
              target="_blank"
              name="github"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
