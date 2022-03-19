import React, { useEffect, useState } from "react";
import "./App.css";
import DateTime from "./Components/DateTime";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UserCollection from "./UserCollection/UserCollection";
import { Card } from "react-bootstrap";
import Scanned from "./Components/Scanned";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [date, setDate] = React.useState(new Date());
  const [updateTime, setUpDateTime] = useState();
  // In Out

  useEffect(() => {
    setInterval(() => {
      setUpDateTime((date) => new Date());
    }, 1000);
  }, []);

  // console.log(updateTime);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Card style={{ width: "18rem", border: 'none'}}>
              <Card.Body >
                <Card.Title style={{fontSize: "44px"}}>Aarong</Card.Title>
                
              </Card.Body>
              
              
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <DateTime></DateTime>
            </Item>
            <Item>
              {/* <UserCollection
                date={date}
                setDate={setDate}
                updateTime={updateTime}
                setUpDateTime={setUpDateTime}
              ></UserCollection> */}
              <Scanned></Scanned>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
