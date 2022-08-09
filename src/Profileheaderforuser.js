import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Contacts from "./componenets/Contacts";
import "./Profileheaderforuser.css";

function Profileheaderforuser(props) {
  const { userprofilepic, username, clickHanlder } = props;

  return (
    <div className="profileheaderofuser">
      <img src={userprofilepic} alt="userimage" className="profilepicofuser" />
      <Typography variant="h4">{username}</Typography>
      <i className="fa-regular fa-magnifying-glass"></i>
      {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
    </div>
  );
}

export default Profileheaderforuser;
