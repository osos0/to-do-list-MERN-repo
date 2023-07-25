import React from "react";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import CRUD from "./CRUD";

const SIGN = () => {
  const [cookies, setCookies] = useCookies("access_token");
  const removeCookies = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.location.reload();
  };

  return (
    <>
      {cookies.access_token ? (
        <>
          <CRUD />
          <button className="btn btn-danger btn-sm m-2" onClick={removeCookies}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/register", {
      username: username,
      password: password,
    });
    alert("Admin created");
  };

  return (
    <>
      <LoginForm
        label="Register"
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:8000/login", {
      username: username,
      password: password,
    });

    // setCookies("access_token", resp.data.token);
    // window.localStorage.setItem("userID", resp.data.adminId);
    // window.location.reload();

    if (
      resp.data.messege === "UserName Or Password is not correct" ||
      resp.data.messege === "User dose not exists"
    ) {
      window.location.reload(false);
      console.log(resp.data);
    } else {
      setCookies("access_token", resp.data.token);
      window.localStorage.setItem("userID", resp.data.adminId);
      window.location.reload(true);
    }
  };

  return (
    <>
      <LoginForm
        label="Login"
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </>
  );
};

const LoginForm = ({
  label,
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
  removeCookies,
}) => {
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{label}</button>
        </div>
      </form>
    </div>
  );
};

export default SIGN;
