import React, { useState } from "react";
import CustomerList from "./CustomerList";
import customers from "../List";


function Searchcustomer() {
  const [search, SetSearch] = useState("");
//   console.log(List)
  const handleChange = (e) => {
    const term = e.target.value;
    SetSearch(term);
  };

  return (
    <>
      <div>
        <input className="large mx-20 w-20" data-testid="search-input" value={search} onChange={handleChange} />
      </div>
      <CustomerList search={search} customers={customers} />
    </>
  );
}

export default Searchcustomer;
