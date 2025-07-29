import React, { useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import imgone from "../web development/Assets/1.jpg";
import { AiFillAccountBook } from "react-icons/ai";

const WebCard = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 mt-20 pt-12 z-0 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-main flex items-center pb-2 pr-2 border-b-2 border-MainTwo uppercase">
            <AiFillAccountBook className="h-6 mr-3" />
            <a href="#" className="font-semibold inline-block">
            Web Development
            </a>
          </div>
          <a href="#">Contact</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {/* CARD 1 */}
          {item.map((val) => (
            <div key={val.id} className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6">
              <div className=" object-cover object-center  cursor-pointer rounded w-612 h-464 ">
                <img
                  width="100%"
                  className="border-solid border-2 border-main p-1"
                  src={val.Imghero}
                />

                <button class="mt-1  py-2 px-1 gap-2 rounded inline-flex items-center">
                  <a target="_blank" href={val.link}>
                    {" "}
                    Live Preview{" "}
                  </a>
                  <svg
                    class="w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-2"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebCard;
