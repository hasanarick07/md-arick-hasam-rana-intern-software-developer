import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Loading from "./Loading";
import TableContent from "./TableContent";

const TableComponent = () => {
  const { data, isLoading } = useQuery(["users"], () =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json())
  );

  const [get, setGet] = useState("");

  const search = data => {
    return data.filter(
      result =>
        result.name.toLowerCase().includes(get.toLowerCase()) ||
        result.email.toLowerCase().includes(get.toLowerCase())
    );
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  // console.log(data);
  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="Enter Name or Email"
          className="m-3"
          onChange={e => setGet(e.target.value)}
        />
        {/* <input
          type="t"
          name="search"
          placeholder="Enter Name or Email"
          id=""
          className="m-3"
          onChange={(e)=>}
        /> */}
      </div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Zip code</th>
          </tr>
        </thead>
        <tbody>
          {search(data).map(d => (
            <TableContent d={d} key={d?.id} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
