import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CSVLink } from "react-csv";

const headers = [
    {label: 'stafId', key: 'stafId'},
    {label: 'now', key: 'now'}
]


const Display = () => {
  const [sheet, setSheet] = useState([]);
  const headings = ["Pin", "Time"];

  const csvReport = {
    filename: 'report.csv',
    headers: headers,
    data: sheet,

}


  useEffect(() => {
    const url = "https://boiling-cove-11605.herokuapp.com/punchs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSheet(data));
  }, []);
  
  
//   const exportOnclick = (e) =>{
//       let result_table = sheet
//       console.log(result_table);
      
    
//   }
  return (
    <div>
      {/* <button onClick={exportOnclick} type="submit">
        Export Data
      </button> */}
      <CSVLink {...csvReport}>Export csv</CSVLink>

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
