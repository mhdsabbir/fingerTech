import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import DateTime from "../Components/DateTime";

const tempoStaf = [];

const UserCollection = ({ inOut, date, inputValue }) => {
  const initialInfo = { date: date };
  const [info, setInfo] = useState(initialInfo);
  console.log(inOut);

  // collecting data

  const onBlur = (e) => {
    // const scanned = e.target.value;
    const input = e.target.value;
    const inputValue = e.target.value;

    const newPunch = { ...info };

    newPunch[input] = value;

    setInfo(newPunch);

    console.log(newPunch);

    e.preventDefault();
  };

  const defaultProps = {
    options: tempoStaf,
    getOptionLabel: (option) => option.pin,
  };

  const flatProps = {
    options: tempoStaf.map((option) => option.pin),
  };

  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        name="input"
        includeInputInList
        onBlur={onBlur}
        renderInput={(params) => (
          <TextField {...params} label="Scan your id card" variant="standard" />
        )}
      />
    </Stack>
  );
};

export default UserCollection;
