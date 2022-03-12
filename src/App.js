import * as React from "react";
import "./App.css";
import DateTime from "./Components/DateTime";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Attendance from "./Components/Attendance";
import UserCollection from "./UserCollection/UserCollection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {

  const [date, setDate] = React.useState(new Date());
  
  const [inputValue, setInputValue] = React.useState("");
  
  return (
    <div className="App">
      {/* <Inputs></Inputs> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <DateTime ></DateTime>
              <Attendance inputValue={inputValue} setInputValue= {setInputValue} ></Attendance>
              <UserCollection date={date} setDate={setDate}></UserCollection>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Information

            </Item>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  );
}

export default App;
