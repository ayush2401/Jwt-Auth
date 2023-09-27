import React from "react";

function CustomerList({ search, customers }) {
  customers = customers.filter((item) => {
    return item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.age.toLowerCase().includes(search);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((data,index) => (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.age}</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
