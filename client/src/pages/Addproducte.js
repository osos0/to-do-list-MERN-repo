import React, { useState } from "react";
// import { json } from "react-json-parse";
// import { json } from "react-router-dom";
import axios from "axios";

const Addproducte = () => {
  const [Car, setCar] = useState("");
  const [Color, setColor] = useState("");
  const [Price, setPrice] = useState("");

  const creatuser = () => {
    // fetch("http://localhost:8000/allproducts", {
    //   method: "POST",
    //   headers: { "Content-Type": "Application/json" },
    //   body: JSON.stringify({
    //     car: Car,
    //     color: Color,
    //     Price: Price,
    //   }),
    // })
    //   .then((req, res) => {
    //     res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    axios
      .post("http://localhost:8000/allproducts", {
        car: Car,
        color: Color,
        price: Price,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className=" m-4">
      <input
        type="text"
        placeholder="car"
        onChange={(e) => {
          setCar(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <button onClick={creatuser}>Submit</button>
    </div>
  );
};

export default Addproducte;
