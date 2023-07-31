// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Proudect = (e) => {
  const params = useParams();
  // console.log(params.id);
  const [fetchdata, setfetchdata] = useState([]);
  // const [Car, setCar] = useState(``);
  // const [Color, setColor] = useState(``);
  // const [Price, setPrice] = useState(``);

  useEffect(() => {
    fetch("https://to-do-list-mern-fgwk.onrender.com/allproducts")
      .then((data) => data.json())
      .then((res) => setfetchdata(res.objs));
  }, []);

  // const handelEdit = (ed) => {
  //   // console.log(del);
  //   axios
  //     .put(`https://to-do-list-mern-fgwk.onrender.com/allproducts/${ed}`, {
  //       car: Car,
  //       color: Color,
  //       price: Price,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  return (
    <div className="m-4">
      {fetchdata.map((child) => {
        return child._id === params.id ? (
          <div key={child._id}>
            <div> Id : {child._id} </div> <div> Brand : {child.car} </div>{" "}
            <input
              type="text"
              placeholder="Brand"
              onChange={(e) => {
                // setCar(e.target.value);
              }}
            />
            <div> color : {child.color} </div>
            <input
              type="text"
              placeholder="color"
              onChange={(e) => {
                // setColor(e.target.value);
              }}
            />
            <div> price : {child.price} </div>
            <input
              type="text"
              placeholder="price"
              onChange={(e) => {
                // setPrice(e.target.value);
              }}
            />
            <button
              className="btn btn-primary btn-sm m-2"
              // onClick={() => {
              //   handelEdit(child._id);
              // }}
            >
              Edit
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Proudect;

// {fetchdata.map((child) => {
//   if (child._id === params.id) {
//     return (
//       <div key={child._id}>
//         <div> {child._id} </div>
//         <div> {child.car} </div>
//         <div> {child.color} </div>
//         <div> {child.price} </div>
//       </div>
//     );
//   }
// })}
