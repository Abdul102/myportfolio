import React from "react";

const userData = [
  {
    name: "Abdul Rehman",
    age: "25",
    qualification: "MSIT",
    post: "Front end Developer (react)",
    language: "English",
  },
];
const userExperince = [
  { year: "2+", title: "years of experine" },
  { year: "100+", title: "projects completed" },
  { year: "140+", title: "Happy customer" },
  { year: "10+", title: "Award won" },
];

const About = () => {
  return (
    <>
      <div className="about space-y-5">
        <div className="title text-center text-5xl font-semibold border-b-2 py-4 border-gray-500 ">
          <h1>
            <span className="text-yellow-600 ">About</span> Me
          </h1>
        </div>

        <div className="main grid grid-cols-2 gap-4 ">
          <div className="left">
            {userData.map((val) => {
              return (
                <ul className="space-y-1 pt-4 text-xl">
                  <li className="border-b  w-96 py-4 border-yellow-500">
                    Name:{" "}
                    <span className="text-yellow-400 ml-3">{val.name}</span>
                  </li>
                  <li className="border-b  w-96 py-4 border-yellow-500">
                    age: <span className="text-yellow-400 ml-3">{val.age}</span>
                  </li>
                  <li className="border-b  w-96 py-4 border-yellow-500">
                    qualification:{" "}
                    <span className="text-yellow-400 ml-3">
                      {val.qualification}
                    </span>
                  </li>
                  <li className="border-b  w-96 py-4 border-yellow-500">
                    post:{" "}
                    <span className="text-yellow-400 ml-3">{val.post}</span>
                  </li>
                  <li className="border-b  w-96 py-4 border-yellow-500">
                    language :{" "}
                    <span className="text-yellow-400 ml-3">{val.language}</span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="right main grid grid-cols-2 gap-4 pt-3">
            {userExperince.map((val) => {
              return (
                <div className="contant bg-dg text-2xl p-4 text-center space-y-2">
                  <h1 className="text-yellow-500 font-semibold font-2xl">
                    {val.year}
                  </h1>
                  <h1>{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
