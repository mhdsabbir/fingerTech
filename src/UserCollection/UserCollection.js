import React, { useRef, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./UserCollection.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Display from "./Display";


const UserCollection = ({ date }) => {
  const form = useRef();
  const [success, setSuccess] = useState();

  const [now, setNow] = useState(
    (date = date.toLocaleDateString() + " " + date.toLocaleTimeString())
  );

  
  const onBlur = (e) => {

    
    const pin = e.target.value



    const stafId = Number(pin)



    const newPunch = { stafId, now };


// console.log(newPunch);



    fetch("https://boiling-cove-11605.herokuapp.com/punchs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPunch),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row style={{ alignItems: "center", textAlign: "center" }}>
          <Col md={12}>
            <div class="l-form">
              <form ref={form} onBlur={onBlur} class="form">
                
                <div class="form__div">
                  <input class="form__input" />
                  <label for="number" class="form__label">
                    Number
                  </label>
                  </div>
                  
                  

              </form>
            </div>
                {success && <Alert severity="success">Welcome</Alert>}
          </Col>
        </Row>
        <Display></Display>
        
      </Container>
    </>
  );
};

export default UserCollection;
