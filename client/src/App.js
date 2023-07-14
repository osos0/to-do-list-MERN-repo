import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Fragment } from "react";
import CRUD from "./componantes/CRUD";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <CRUD />
      </BrowserRouter>
    </>
  );
}

export default App;
