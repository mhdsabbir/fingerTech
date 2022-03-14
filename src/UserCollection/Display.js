import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Display = () => {
  const [sheet, setSheet] = useState([]);



  useEffect(() => {
    const url = "http://localhost:5000/punchs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSheet(data));
  }, []);


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pin</th>
            <th>Time</th>
          </tr>
        </thead>
        {sheet.map((pd) => (
          <tr>
            <td>{pd.stafId}</td>
            <td>{pd.now}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Display;
