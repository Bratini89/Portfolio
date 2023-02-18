import React from "react";
import ParticlesBackground from "./config/ParticlesBackground";

import Workitem from "./Workitem";

const data = [
  {
    year: 2009,
    title: "Xerox Company (ACS)",
    duration: "3 Years",
    details:
      "I worked as digitizer of banking information documents in Santo Domingo Dominican Republic.",
  },
  {
    year: 2012,
    title: "Copy Solution International",
    duration: "2 Years",
    details:
      "I worked as digitizer of documents for low-income individuals to apply for government economic subsidies in Santo Domingo Dominican Republic.",
  },
  {
    year: 2016,
    title: "Aimpaq Courier Service",
    duration: "3 Years",
    details:
      "I worked in customer service, registering new customers, delivering the goods they purchased online on various international websites and answering user call in both spanish my native language and english in Santo Domingo Dominican Republic.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
