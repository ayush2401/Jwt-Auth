import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const access = localStorage.getItem("access_token");

  return (
    <div>
      {access ? (
        <>
          <h1>Home</h1>
          <button onClick={() => navigate("/order-summary")}> Place order</button>
        </>
      ) : (
        <>
          <h1> Please login</h1>
        </>
      )}
    </div>
  );
}
