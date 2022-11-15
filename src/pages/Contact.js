import React from "react";
import { IoMdContact } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const mydata = [
  { icon: <IoMdContact />, title: "Contact no", val: "03084377096" },
  { icon: <BsFacebook />, title: "Facebook", val: "abdulrehman@facebook.com" },
  {
    icon: <AiOutlineMail />,
    title: "Email",
    val: "Abdulrehmanzahoor10@gmail.com",
  },
  { icon: <AiFillLinkedin />, title: "Linkinden", val: "abdul1037linkdin.com" },
  { icon: <AiFillGithub />, title: "github", val: "abdul30git.com" },
];

const Contact = () => {
  return (
    <div className="contact grid ">
      <div className=" bg-dg grid content-center my-14 p-12">
        <div className="main ">
          <h1 className="text-5xl text-center font-semibold">
            Contact information
          </h1>
        </div>
        <div className="list">
          {mydata.map((val) => {
            return (
              <>
                <div className="main   ">
                  <div className="left mr-6 text-5xl flex items-center p-5 text-yellow-500 ">
                    {val.icon}{" "}
                    <span className="text-lg ml-10 ">{val.title}</span>{" "}
                    <span className="ml-20 flex justify-end  text-white border-b-2 text-sm">
                      {val.val}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
