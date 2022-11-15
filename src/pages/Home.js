import React from "react";
import user from '../pages/usr.png'
const Home = () => {
  return (
    <>
  

    <div>
      <div className="title text-center text-5xl font-semibold border-b-2 py-4 border-gray-500 ">
        <h1>
        About<span className="text-yellow-600 ">  Myself</span>
        </h1>
      </div>

      <div className="main  pt-5 flex ">



      <div className="space-y-7 h-56 mt-10 w-4/6 px-4">
        <div className="titlearea ">
          <h1>Hi THERE!</h1>
          <h1 className="text-4xl font-bold">
            I'M <span className="text-yellow-600">ABDUL REHMAN</span>
          </h1>
        </div>

        <div className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eos
          iste doloribus totam dolores atque, consectetur reiciendis dolore
          similique quis quisquam alias ducimus voluptas eveniet quod veritatis
          facilis est assumenda. Magni expedita fuga inventore! Vero, eaque
          eligendi iure quas vel dicta cumque iste. Ratione, accusamus quidem.
          Voluptas veritatis pariatur consectetur fugit modi.
        </div>
      </div>
      <div className="l">
        <img src={user} width="300"  className="rounded-3xl"/>
      </div>
      

      </div>
    </div>






    </>
  );
};

export default Home;
