import { useState } from "react";
import { FaBars, FaTimes, FaUikit } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-10 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-xs font-primary ml-2">Septiana Rapih Maharani.</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-primary
             text-white hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer
        pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
      <ul
        className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-primary capitalize py-6
            text-4xl"
          >
            {link}
          </li>
        ))}
      </ul>
       )}
    </div>
  );
};

export default Header;
