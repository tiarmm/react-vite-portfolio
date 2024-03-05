import React from "react";
import Studienkolleg from "../images/studienkolleg.png";
import HTW from "../images/htw.png";
import Purwadhika from "../images/purwadhika.png";

const Projects = () => {
  return (
    <div className=" bg-white w-full h-full">
      <div className="grid justify-items-center m-10">
        <h1 className="font-primary font-bold text-3xl text-black mt-10 ">
          Education
        </h1>


        <div className="flex items-center justify-center min-h-screen container mx-auto py-[-2]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-10 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={Studienkolleg} alt="studienkolleg" className="mt-5"></img>
                </div>
                <h5 className="mt-10 text-center font-primary">
                  March 2017 - July 2017
                </h5>
                <h5 className="mt-5 text-center font-primary">
                  Business Course / University Prepatory and Advanced High
                  School
                </h5>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-10 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={HTW} alt="htw"></img>
                </div>
                <h5 className="mt-5 text-center font-primary">
                Oct 2017 - March 2020
                </h5>
                <h5 className="mt-5 text-center font-primary">
                Majoring in Business Informatics
                </h5>
              </div>
            </div>


            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-10 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={Purwadhika} alt="htw" className="mt-10"></img>
                </div>
                <h5 className="mt-10 text-center font-primary">
                Feb 2024 - August 2024
                </h5>
                <h5 className="mt-5 text-center font-primary">
                Fullstack Web Developer Course
                </h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
