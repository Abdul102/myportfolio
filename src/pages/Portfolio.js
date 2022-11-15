import React from "react";
import { FaBeer } from "react-icons/fa";

import graphics from "../pages/imgs/graphics.jpg"
import react from "../pages/imgs/react.jpg"
import uiux from "../pages/imgs/uiux.jpg"
import vector from "../pages/imgs/vector.jpg"
import logo from "../pages/imgs/logo.jpg"
import webdev from "../pages/imgs/webdev.jpg"
import webdis from "../pages/imgs/webdis.jpg"

const useredu = [
  {
    year: <FaBeer /> ,img:{logo} ,
  },
  {
    year: <FaBeer /> ,img:{graphics},
  },
  {
    year: <FaBeer /> ,img:{react},
  },
  {
    year: <FaBeer /> ,img:{uiux},
  },
  {
    year: <FaBeer /> ,img:{vector},
  },
  {
    year: <FaBeer /> ,img:{webdis},
  },
  {
    year: <FaBeer /> ,img:{webdev},
  },

];

const Portfolio = () => {
  return (
    <>
      <div>
        <div className="title text-center text-5xl font-semibold border-b-2 py-4  border-gray-500 ">
          <h1>
            MY <span className="text-yellow-600 ">PORTFOLIO</span>
          </h1>
        </div>

        <div className="main grid grid-cols-4 gap-4 pt-5 ">
          {useredu.map((val) => {
            return (
              <div className="left flex p-4 bg-dg space-x-7 px-2 rounded-lg">
                <div className="grid justify-items-start">
                <img src={val.img}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
