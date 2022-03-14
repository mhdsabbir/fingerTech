import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./UserCollection.css";
import Display from "./Display";

const UserCollection = ({ date }) => {
  const form = useRef();
  const [success, setSuccess] = useState();

  const [now, setNow] = useState(
    date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
  );


  const onBlur = (e) => {
    const pin = e.target.value;

    const stafId = pin;
    const newPunch = { stafId, now };

    

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
        if (data.insertedId) {
          window.location.reload();
          newPunch.clear();
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row style={{ alignItems: "center", textAlign: "center" }}>
          <Col md={12}>
            <div className="l-form">
              <form ref={form} onBlur={onBlur} className="form">
                <div className="form__div">
                  <input className="form__input" />
                  <label htmlFor="number" className="form__label">
                    Scan Your ID
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
