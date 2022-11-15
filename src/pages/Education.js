import React from "react";
const useredu = [
  {
    year: "2013",
  },
  {
    year: "2014",
  },
  {
    year: "2015",
  },
  {
    year: "2016",
  },
  {
    year: "201",
  },
];

const Education = () => {
  return (
    <div>
      <div className="title text-center text-5xl font-semibold border-b-2 py-4 border-gray-500 ">
        <h1>
          MY <span className="text-yellow-600 ">EDUCATION</span>
        </h1>
      </div>

      <div className="main grid grid-cols-3 gap-4 pt-5 ">

{
    useredu.map((val)=>{
        return(
            <div className="left flex p-4 bg-dg space-x-7 px-2 rounded-lg">
            <div className="left">left</div>
            <div className="right">
                <h1 className=" bg-gray-400 w-12 text-center p-1  rounded-lg">{val.year}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi
                     veniam suscipit nihil! Quidem quasi quia sit? Dolores, labore natus?</p>
            </div>
          </div>
        )
    })
}
      

      </div>
    </div>
  );
};

export default Education;
