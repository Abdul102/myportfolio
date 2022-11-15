import React from "react";
import { Outlet, Link } from "react-router-dom";
import user from "../pages/AAAA.png";

const Layout = () => {
  return (
    <>
      <div className="main flex">
        <div className="bg-bgg h-screen w-80 pt-10  shadow-lg rounded-r-xl">
          <div className="side  text-center mx-8 space-y-10 ">
            <div className="top h-48 grid  place-items-center">
              <img src={user} width="120" />
              <div className="title  text-white">
                <h1 className="text-3xl">Abdul rehman </h1>
                <p>front end developer</p>
              </div>
            </div>
            <div className="bottom h-full mt-4">
              <div className="list my-3  p-2 rounded-2xl list-none text-white ">
                <>
                  <nav className="">
                    <ul>
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/">Home</Link>
                      </li>
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/About">About</Link>
                      </li>
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/Portfolio">portfolio</Link>
                      </li>
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/blogs">Blogs</Link>
                      </li>
                  
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/Education">Education</Link>
                      </li>
                      <li className=" bg-dg my-4 hover:bg-gray-700 p-2 rounded-xl cursor-pointer">
                        <Link to="/contact">Contact</Link>
                      </li>
                 
                    
                    </ul>
                  </nav>
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="contant text-white flex-1 mx-20 bg-black">
        <Outlet />
        </div>

       
      </div>
    </>
  );
};

export default Layout;
