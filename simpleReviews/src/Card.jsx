import { ImQuotesLeft } from "react-icons/im";

import React from "react";
export function Card({ image, name, job, text }) {
  return (
    <div className="p-5 m-5 bg-blue-100 rounded-sm shadow-xl flex flex-col items-center gap-2 max-w-lg">
      <div className="relative">
        <img
          src={image}
          alt=""
          className=" object-cover rounded-[50%] w-[100px] h-[100px] border-black border-solid border-2"
        />
        <span className="  absolute top-3 left-[-5px] bg-blue-300 p-1 rounded-xl">
          <ImQuotesLeft />
        </span>
      </div>

      <span className=" capitalize font-bold">{name} </span>
      <span className=" capitalize  italic font-bold text-blue-400">{job}</span>
      <p>{text}</p>
    </div>
  );
}
