import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("token/", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token");
        props.SetisLoggedIn(true);
        navigate("/");
      });
  };

  return (
    <div>
      {!props.isLoggedIn ? (
        <form onSubmit={handleSubmit} className="w-25 mx-auto m-5">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      ) : (
        <h1> Please logout to acess this page </h1>
      )}
    </div>
  );
}

export default Login;
