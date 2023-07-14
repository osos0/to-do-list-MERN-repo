import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Allproducts from "../pages/Allproducts";
import Allcateogries from "../pages/Allcateogries";
import AddProudute from "../pages/Addproducte";
import Proudect from "../pages/Proudect";

const CRUD = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<Allproducts />} />
            <Route path="/allcateogries" element={<Allcateogries />} />
            <Route path="/addproducte" element={<AddProudute />} />
            <Route path="/allproducts/:id" element={<Proudect />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default CRUD;
