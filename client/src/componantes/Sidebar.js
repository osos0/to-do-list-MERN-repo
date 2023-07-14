import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="List-unstylied">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/allproducts"> Get All Producte</Link>
        </li>
        <li>
          <Link to="/allcateogries"> Get All cateogries</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
