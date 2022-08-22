import { faHelicopterSymbol } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import React, { useState } from "react";
import "./Loginpage.css";
import Login from "./Login";
import Createaccount from "./Createaccount";

function Loginpage() {
  const [popUp, setPopUp] = useState("");

  const createAccount = () => {
    setPopUp("UP");
  };
  const logIn = () => {
    setPopUp("IN");
  };
  const closeDiv = () => {
    setPopUp("");
  };

  return (
    <div className="login">
      <Box className="firstbox">
        <h1 className="logo">Uchat</h1>
        <button className="btn1" onClick={createAccount}>
          Create Account
        </button>
        <button className="btn2" onClick={logIn}>
          Log In
        </button>
      </Box>

      {popUp === "UP" ? <Createaccount closeDiv={closeDiv} /> : null}
      {popUp === "IN" ? <Login closeDiv={closeDiv} /> : null}
    </div>
  );
}

export default Loginpage;
