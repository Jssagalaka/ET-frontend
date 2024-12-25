import React from "react";

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mongoDB from "../../public/mongodb.jpg";
import nodejs from "../../public/node.png";
import flutter from "../../public/flutter1.png";
import flutterFlow from "../../public/flutterflow1.jfif";
import uiux from "../../public/uiux.avif";

function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 7,
      logo: express,
      name: "Express",
    },
    {
      id: 8,
      logo: flutter,
      name: "Flutter",
    },
    {
      id: 9,
      logo: flutterFlow,
      name: "FlutterFlow",
    },
    {
      id: 10,
      logo: uiux,
      name: "UI/UX",
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-white">
          Our Work Expertise
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={logo}
                  className="w-[75px] h-[75px] rounded-lg transform hover:rotate-180 transition-transform duration-500"
                  alt=""
                />
              </div>
              <div className="mt-3 text-white text-center text-sm font-medium">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
