import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["In Time", "Out Time"];

const Attendance = ({ inOut, setInOut, inputValue, setInputValue }) => {
  const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState("");
  // ekhn upore nicchi
  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="In Time  and Out Time" />
        )}
      />
    </div>
  );
};

export default Attendance;
