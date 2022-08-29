import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPlus, FaRegTimesCircle } from "react-icons/fa";
import flex_logo from "../../assets/images/flex_logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between items-center h-16 w-full p-3 bg-gray-100 drop-shadow-md">
      <div className="flex items-center gap-4">
        <button className="p-4" onClick={handleClick}>
          {!!menuOpen ? (
            <FaRegTimesCircle className="h-8 w-8" />
          ) : (
            <FaBars className="h-8 w-8" />
          )}
        </button>
        <img className="h-10 w-full" src={flex_logo} alt="Flex_logo.svg" />
      </div>
      <ul className="hidden md:flex">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
      <Link
        to="/"
        className="flex justify-center items-center h-10 w-20 rounded-md bg-secondary text-white "
      >
        <FaPlus />
      </Link>
    </nav>
  );
}

export { Header };
