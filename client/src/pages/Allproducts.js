// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [fetchdata, setfetchdata] = useState([]);
  // const [Productdata, setProductdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allproducts")
      .then((data) => data.json())
      .then((res) => setfetchdata(res.objs));
  }, []);

  const handelDelete = (del) => {
    fetch(`http://localhost:8000/allproducts/${del}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(setfetchdata(fetchdata.filter((obj) => obj._id !== del)));
  };

  return (
    <>
      <h1> Products Page</h1>
      <Link to={"/addproducte"}>
        <button className="btn btn-success mt-3">Add new Product</button>
      </Link>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Color</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        {fetchdata.map((ob) => {
          return (
            <tbody key={ob._id}>
              <tr>
                <td>{ob._id}</td>
                <td>{ob.car}</td>
                <td>{ob.color}</td>
                <td>{ob.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handelDelete(ob._id);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info btn-sm m-2"
                    to={`/allproducts/${ob._id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm m-2"
                    to={`/allproducts/${ob._id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Allproducts;
