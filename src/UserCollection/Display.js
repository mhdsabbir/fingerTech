import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const headers = [
    {label: 'Pin', key: 'stafId'},
    {label: 'Time', key: 'now'}
]

const Display = () => {
  const [sheet, setSheet] = useState([]);

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

    
  

  return (
    <div>
      <CSVLink {...csvReport} className="">Export csv</CSVLink>

      
    </div>
  );
};

export default Display;