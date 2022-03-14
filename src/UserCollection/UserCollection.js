import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./UserCollection.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["In Time", "Out Time"];

const UserCollection = ({ date, setDate }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState(options[0]);
  const form = useRef();

  const [pin, setPin] = useState();
  const [inO, setInO] = useState(

    );
    // console.log(inputValue);

  const [now, setNow] = useState((date = date.toString()));

  const sendStafAtt = (e) => {
    // pin = e.target.value
    const atten = e.target.value;
    const inO = inputValue;


    const newPunch = { atten, inO, now };

    

    // console.log(newPunch);
    const punch = {
      newPunch,
    };
    console.log(punch);

    fetch('http://localhost:5000/punchs',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(punch)
    })
    .then(res => res.json())
    .then(data => {
      
    })

    
    e.preventDefault();
  };

  return (
    <Container>
      <Row style={{ alignItems: "center", textAlign: "center" }}>
        <Col md={12}>
          <div class="l-form">
            <form ref={form} onSubmit={sendStafAtt} class="form">
              <Autocomplete
                value={inO}
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
              <div class="form__div">
                <input class="form__input" />
                <label for="number" class="form__label">
                  Number
                </label>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCollection;
