import "./App.css";
import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Searchcustomer from "./components/Searchcustomer";

// const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  const [isLoggedIn, SetisLoggedIn] = useState(localStorage.getItem("access_token"));

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login SetisLoggedIn={SetisLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
        <Route exact path="/register" element={<Register isLoggedIn={isLoggedIn} />}></Route>
        <Route exact path="/logout" element={<Logout SetisLoggedIn={SetisLoggedIn} />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>

      {/* <Searchcustomer/> */}
    </>
  );
}

export default App;


