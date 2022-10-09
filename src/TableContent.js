import React from "react";

const TableContent = ({ d }) => {
  const { id, name, email, company, address } = d;

  // console.log(address?.zipcode);
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{company?.name}</td>
      <td>{address?.zipcode}</td>
    </tr>
  );
};

export default TableContent;
