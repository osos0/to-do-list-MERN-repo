import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Fragment } from "react";
import SIGN from "./componantes/SIGN";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <SIGN />
      </BrowserRouter>
    </>
  );
}

export default App;
