import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./UserCollection.css";
import Display from "./Display";

const UserCollection = ({ date }) => {
  let barcode = '';
  let interval;
  document.addEventListener('keydown', function(evt){
    if (interval)
      clearInterval(interval);
    if(evt.code == 'Enter'){
      if (barcode)
      handleBarcode(barcode);
      barcode = '';
      return;
    }
    if(evt.code != 'Shift')
      barcode += evt.key;
      interval = setInterval(() => barcode = '', 20);
    
  });
  function handleBarcode(scanned_barcode){
    document.querySelector('#last-barcode').innerHTML = scanned_barcode;

    
  }

  
  const form = useRef();
  const [success, setSuccess] = useState();
  const [scanned , setScanned] = useState(
    barcode
  );

  console.log(scanned.value);
  console.log(scanned);
  

  const [now, setNow] = useState(
    date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
  );

  const hangle = (e) => {
    const pin = e.target.value;
    
    const stafId = pin;
    const newPunch = { stafId, now };
    
    

    // fetch("https://boiling-cove-11605.herokuapp.com/punchs", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newPunch),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       setSuccess(true);
    //     }
    //     if (data.insertedId) {
    //       window.location.reload();
    //       newPunch.clear();
    //     }
    //   });

    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row style={{ alignItems: "center", textAlign: "center" }}>
          <Col md={12}>
            <div className="l-form">
              <form ref={form}  className="form">
                <div className="form__div">
                <label for="name" class="form__label">
                    Type
                  </label>
                  <br />
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    name="name"
                  />
                  
                  <br />
                  <label for="barcode" class="form__label">
                    Scan with barcode
                  </label>
                  <br />
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    name="barcode"
                    id="last-barcode"
                  />
                  
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
