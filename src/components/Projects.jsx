import React from "react";
import Projectitem from "./Projectitem";
import EcommerceNojejs from "../assets/EcommerceNodeJs.png";
import EcommerceReact from "../assets/EcommerceReact.png";
import Pokedex from "../assets/Pokedex.png";
import RandomQuote from "../assets/RandomQuote.png";
import UserCrud from "../assets/UserCrud.png";
import WeatherApp from "../assets/WeatherApp.png";
import RickyAndMorty from "../assets/RickyAndMorty.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem
        neque sequi quisquam, rem mollitia deleniti aspernatur culpa illum,
        quasi, suscipit impedit veritatis itaque! Consectetur pariatur quae
        quidem molestias minus.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={UserCrud} title="User Crud App" />
        <Projectitem img={Pokedex} title="Pokemon App" />
        <Projectitem img={RandomQuote} title="Random Quote" />
        <Projectitem img={WeatherApp} title="Weather App" />
        <Projectitem img={RickyAndMorty} title="Ricky and Morty App" />
        <Projectitem img={EcommerceNojejs} title="E-Commerce" />
        <Projectitem img={EcommerceReact} title="E-commerce" />
      </div>
    </div>
  );
};

export default Projects;
