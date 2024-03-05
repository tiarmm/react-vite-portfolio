import React from "react";
import foto from "../images/foto.png";



const Jumbotron = () => {
  return (
    <div 
    name="home"
    className="w-full bg-gradient-to-b from-black to-gray-800 justify-between text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row">
        <div className=" mt-14 flex flex-col justify center h-full md:mt-80">
          <h1 className="text-4xl sm:text-6xl font-bold font-primary">
            I'm a Full Stack Web Developer
          </h1>
          <p className="py-4 font-primary max-w-md text-xs">
            Transforming Concepts into Seamless Digital Experiences. Expert in
            Frontend Magic and Backend Wizardry, I Code Dreams into Reality.
          </p>


          <div>
          <button class="text-xs font-primary bg-transparent hover:bg-pink-400 text-pink-400 font-semibold hover:text-white py-2 px-7 border border-pink-400 hover:border-transparent rounded px-">
            My Portfolio
          </button>
        </div>
      </div>

<div >
<img
src={foto}
alt="my profile"
className="rounded-full h-auto max-w-xs p-8"
/>
</div>
    </div>
    </div>
  );
};

export default Jumbotron;
